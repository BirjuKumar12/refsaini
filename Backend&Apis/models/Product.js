import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true, default: "/img/prod/Royal flame butane gas can paint percent extra (1).jpeg" },
        description: String,
        star: Number,
        imgCount: Number
});

const Product = mongoose.model('Product', productSchema);
export default Product;
