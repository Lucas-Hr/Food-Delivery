import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderer: [
        {
            name: {
                type: String,
                required: true,
            },
            address : {
                type: String,
                required: true,
            },
            mail: {
                type: String,
                required: true,
            }
        }
    ],
    items: [
        {
            food : {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    },
    time: {
        type : Date,
    }
}, { timestamps: true });

export default mongoose.model('Orders', orderSchema);