import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    image : {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    job : {
        type: String,
        required: true,
    },
    socialMedia : [
        {
            facebook : {
                type: String,
            },
            linkedIn: {
                type: String,
            },
            intagram : {
                type: String,
            },
            x : {
                type: String,
            }
        }
    ],
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Employees", employeeSchema);