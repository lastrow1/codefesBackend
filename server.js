import Express from "express";
import cors from "cors";
import conectDB from "./config/dbConnect.js";
import student from "./controller/student.Controller.js";


const PORT = 4000;
const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())
conectDB();

app.get('/', (req, res) => {
    res.json({ msg: 'success' })
});

app.get('/students', student.getAllStudents);
app.get('/getLastStudent', student.getLastStudent)
app.post('/students', student.InsertStudent);
app.delete('/removeSingelStudent/:ID', student.removeSingelStudent)



app.listen(PORT, () => {
    console.log(`App is running On ${PORT}`);
})