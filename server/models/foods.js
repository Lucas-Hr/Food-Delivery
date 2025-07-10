import mongoose from "mongoose";

const foodsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Foods", foodsSchema);