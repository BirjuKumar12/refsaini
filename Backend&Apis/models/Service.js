import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
        icon: { type: String, required: true, default: "/img/Ac repair.webp" },
        title: { type: String, required: true },
        text: { type: String, required: true },
        star: { type: Number, default: 5 },
        description: { type: String, required: true },
        category: { type: String, required: true }
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

export default Service;