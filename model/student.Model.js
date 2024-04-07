import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const studentMODEL = mongoose.model('student', studentSchema);

export default studentMODEL;
