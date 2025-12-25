import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Order from "./models/Order.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Cart from "./models/Cart.js";
import Service from "./models/Service.js";

dotenv.config();

const app = express();
const PORT = 5001;
const JWT_SECRET = process.env.JWT_SECRET || "saini_secret_key_123";

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/saini_refrigeration";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes

// --- Auth Routes ---

// POST /api/auth/register
app.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone
        });

        await newUser.save();

        // Create Token
        const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({
            success: true,
            token,
            user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role }
        });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }

        // Create Token
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

        res.json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});


// --- Product Routes ---

// GET /api/products - Get all products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
});

// POST /api/products - Create a new product
app.post("/api/products", async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = new Product(productData);
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: "Error creating product" });
    }
});

// POST /api/products/bulk - Bulk create products (for seeding)
app.post("/api/products/bulk", async (req, res) => {
    try {
        const productsData = req.body; // Expecting an array
        if (!Array.isArray(productsData)) {
            return res.status(400).json({ success: false, message: "Input must be an array" });
        }
        await Product.insertMany(productsData);
        res.status(201).json({ success: true, message: `Successfully added ${productsData.length} products` });
    } catch (error) {
        console.error("Error bulk creating products:", error);
        res.status(500).json({ success: false, message: "Error bulk creating products" });
    }
});

// DELETE /api/products/cleanup/all - Delete ALL products (Reset)
app.delete("/api/products/cleanup/all", async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ success: true, message: "All products deleted successfully" });
    } catch (error) {
        console.error("Error deleting all products:", error);
        res.status(500).json({ success: false, message: "Error deleting all products" });
    }
});

// DELETE /api/products/cleanup/duplicates - Remove duplicate products
app.delete("/api/products/cleanup/duplicates", async (req, res) => {
    try {
        const duplicates = await Product.aggregate([
            {
                $group: {
                    _id: "$name", // Group by name
                    uniqueIds: { $addToSet: "$_id" },
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $gt: 1 } // Find groups with more than 1 document
                }
            }
        ]);

        let deletedCount = 0;
        for (const doc of duplicates) {
            // Keep the first ID, delete the rest
            const idsToDelete = doc.uniqueIds.slice(1);
            await Product.deleteMany({ _id: { $in: idsToDelete } });
            deletedCount += idsToDelete.length;
        }

        res.json({ success: true, message: `Cleanup complete. Removed ${deletedCount} duplicate products.` });
    } catch (error) {
        console.error("Cleanup Error:", error);
        res.status(500).json({ success: false, message: "Error cleaning up duplicates" });
    }
});

// UPDATE /api/products/:id - Update a product
app.put("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json({ success: true, message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: "Error updating product" });
    }
});

// DELETE /api/products/:id - Delete a product
app.delete("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Error deleting product" });
    }
});

// POST /api/auth/seed-admin - Create a default admin user
app.post("/api/auth/seed-admin", async (req, res) => {
    try {
        const adminEmail = "admin@gmail.com";
        const existingAdmin = await User.findOne({ email: adminEmail });
        if (existingAdmin) {
            return res.json({ success: true, message: "Admin already exists (admin@gmail.com / admin123)" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("admin123", salt);

        const newAdmin = new User({
            name: "Admin User",
            email: adminEmail,
            password: hashedPassword,
            phone: "0000000000",
            role: "admin"
        });

        await newAdmin.save();
        res.status(201).json({ success: true, message: "Admin created: admin@gmail.com / admin123" });
    } catch (error) {
        console.error("Admin Seed Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// GET /api/orders - Get all orders (for history)
app.get("/api/orders", async (req, res) => {
    try {
        const orders = await Order.find().sort({ date: -1 });
        res.json({ success: true, orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error fetching orders" });
    }
});

// POST /api/orders - Create a new order
app.post("/api/orders", async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = new Order(orderData);
        await newOrder.save();
        res.status(201).json({ success: true, message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
});

// --- Cart Routes ---

// GET /api/cart - Get user's cart
app.get("/api/cart", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(token, JWT_SECRET);
        const cart = await Cart.findOne({ userId: decoded.id });

        res.json({ success: true, cart: cart ? cart.items : [] });
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ success: false, message: "Error fetching cart" });
    }
});

// POST /api/cart - Save user's cart
app.post("/api/cart", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(token, JWT_SECRET);
        const { cart: items } = req.body;

        let cart = await Cart.findOne({ userId: decoded.id });

        if (cart) {
            cart.items = items;
            cart.updatedAt = Date.now();
            await cart.save();
        } else {
            cart = new Cart({
                userId: decoded.id,
                items: items
            });
            await cart.save();
        }

        res.json({ success: true, message: "Cart saved successfully", cart: cart.items });
    } catch (error) {
        console.error("Error saving cart:", error);
        res.status(500).json({ success: false, message: "Error saving cart" });
    }
});

// DELETE /api/cart - Clear user's cart
app.delete("/api/cart", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(token, JWT_SECRET);
        await Cart.findOneAndDelete({ userId: decoded.id });

        res.json({ success: true, message: "Cart cleared successfully" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ success: false, message: "Error clearing cart" });
    }
});


// --- Service Routes ---

// GET /api/services - Get all services
app.get("/api/services", async (req, res) => {
    try {
        const services = await Service.find();
        res.json({ success: true, services });
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ success: false, message: "Error fetching services" });
    }
});

// POST /api/services - Create a new service
app.post("/api/services", async (req, res) => {
    try {
        const serviceData = req.body;
        const newService = new Service(serviceData);
        await newService.save();
        res.status(201).json({ success: true, message: "Service created successfully", service: newService });
    } catch (error) {
        console.error("Error creating service:", error);
        res.status(500).json({ success: false, message: "Error creating service" });
    }
});

// DELETE /api/services/:id - Delete a service
app.delete("/api/services/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Service.findByIdAndDelete(id);
        res.json({ success: true, message: "Service deleted successfully" });
    } catch (error) {
        console.error("Error deleting service:", error);
        res.status(500).json({ success: false, message: "Error deleting service" });
    }
});

// UPDATE /api/services/:id - Update a service
app.put("/api/services/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const serviceData = req.body;
        const updatedService = await Service.findByIdAndUpdate(id, serviceData, { new: true });
        if (!updatedService) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }
        res.json({ success: true, message: "Service updated successfully", service: updatedService });
    } catch (error) {
        console.error("Error updating service:", error);
        res.status(500).json({ success: false, message: "Error updating service" });
    }
});

// POST /api/services/bulk - Bulk create services
app.post("/api/services/bulk", async (req, res) => {
    try {
        const servicesData = req.body;
        if (!Array.isArray(servicesData)) {
            return res.status(400).json({ success: false, message: "Input must be an array" });
        }
        await Service.insertMany(servicesData);
        res.status(201).json({ success: true, message: `Successfully added ${servicesData.length} services` });
    } catch (error) {
        console.error("Error bulk creating services:", error);
        res.status(500).json({ success: false, message: "Error bulk creating services" });
    }
});


// Default Route
app.get("/", (req, res) => {
    res.send("Server is running with MongoDB!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
