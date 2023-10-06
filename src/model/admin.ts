import mongoose from "mongoose";


const admin = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    adminType: {
        type: Number,
        enum: [1, 2],
    },
    status: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});


const AdminModel = mongoose.model("admin", admin);
export default AdminModel;