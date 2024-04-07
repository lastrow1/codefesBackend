import mongoose from "mongoose";

const dbURI = 'mongodb+srv://whomahtab:fBHuQVLMCxyYKbxd@codefeststudents.4rvxl5q.mongodb.net/?retryWrites=true&w=majority&appName=codefestStudents'
const conectDB = async () => {
    try {
        const connetcDB = await mongoose.connect(dbURI)
        console.log('Connected...');

    } catch (error) {
        console.log(error)
    }
}

export default conectDB


// 'mongodb://127.0.0.1:27017/studentData'