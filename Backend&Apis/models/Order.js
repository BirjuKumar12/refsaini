import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
        orderId: { type: String, required: true, unique: true },
        items: [{
                name: String,
                price: Number,
                quantity: Number,
                img: String
        }],
        total: Number,
        date: { type: Date, default: Date.now },
        status: { type: String, default: 'Processing' },
        shipping: {
                firstName: String,
                lastName: String,
                email: String,
                phone: String,
                address: String,
                city: String,
                state: String,
                pincode: String,
                paymentMethod: String
        }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
