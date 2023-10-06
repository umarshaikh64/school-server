import mongoose from "mongoose";


const student = new mongoose.Schema({

    "s_id": {
        "type": "Number"
    },
    "rec_date": {
        "type": "String"
    },
    "grno": {
        "type": "Number"
    },
    "gender": {
        "type": "String"
    },
    "name": {
        "type": "String"
    },
    "father": {
        "type": "String"
    },
    "cast": {
        "type": "String"
    },
    "cell": {
        "type": "String"
    },
    "religion": {
        "type": "String"
    },
    "nationality": {
        "type": "String"
    },
    "pob": {
        "type": "String"
    },
    "section": {
        "type": "String"
    },
    "class": {
        "type": "String"
    },
    "old _id": {
        "type": "Number"
    },
    "std_status": {
        "type": "String"
    },
    "LDT": {
        "type": "String"

    }
}, { timestamps: true });



// const student = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 3
//     },
//     fatherName: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 3,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     cast: {
//         type: String,
//         required: true,
//     },
//     nationality: {
//         type: String,
//         required: true,
//     },
//     dob1: {
//         type: String,
//         required: true,
//     },
//     dob2: {
//         type: String,
//         required: true,
//     },
//     placeOfBirth: {
//         type: String,
//         required: true,
//     },
//     religion: {
//         type: String,
//         required: true,
//     },
//     fatherCnic: {
//         type: String,
//         required: true,
//     },
//     cellNo: {
//         type: String,
//         required: true,
//     },
//     classAdmissionId: {
//         type: mongoose.Types.ObjectId,
//         required: true,
//         ref: "class",
//     },
//     lastSchool: {
//         type: String,
//         default: ""
//     },
//     address: {
//         type: String,
//         required: true,
//     },
//     grno: {
//         type: String,
//         required: true,
//     },
//     stdStatus: {
//         type: String,
//         enum: ["LEFT", "PRESENT"],
//         required: true,
//     },
//     status: {
//         type: Boolean,
//         default: true
//     }
// }, { timestamps: true });



const Student = mongoose.model("student", student);
export default Student;