import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    phone:{
        type:String
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    }

}, { timestamps: true })


const usermodel = mongoose.model('user', userSchema)

export default usermodel