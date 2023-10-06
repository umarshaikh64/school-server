


import mongoose from 'mongoose';
async function dbConnect() {
    await mongoose.connect("mongodb+srv://Umar:Umar1234@cluster0.llvy8f3.mongodb.net/school");
    // await mongoose.connect('mongodb://127.0.0.1:27017/school');
}

export default dbConnect;
