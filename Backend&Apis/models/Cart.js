import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
        items: [
                {
                        name: { type: String, required: true },
                        price: { type: Number, required: true },
                        img: { type: String },
                        quantity: { type: Number, required: true, default: 1 },
                        description: { type: String }
                }
        ],
        updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
