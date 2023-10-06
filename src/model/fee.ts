import mongoose from "mongoose";



const fee = new mongoose.Schema({

    stIdDB: {
        type: mongoose.Types.ObjectId,
        ref: "student",
        required: true,
    },
    stId: {
        type: String,
        default: "",
    },
    isPay: {
        type: Boolean,
        default: false,
    },
    issueDate: {
        type: String,
        required: true,
    },
    lastFeeDate: {
        type: String,
        required: true,
    },
    admissionFee: {
        type: String,
        default: "",
    },
    examFee: {
        type: String,
        default: "",
    },
    idCardFee: {
        type: String,
        default: "",
    },
    monthlyFee: {
        type: String,
        default: "",
    },
    registrationFee: {
        type: String,
        default: "",
    },
    annualFee: {
        type: String,
        default: "",
    },
    discount20Fee: {
        type: String,
        default: "",
    },
    othersFee: {
        type: String,
        default: "",
    },
    arrearsTotal: {
        type: String,
        default: "",
    },
}, { timestamps: true });


const FeeModel = mongoose.model("fee", fee);

export default FeeModel;