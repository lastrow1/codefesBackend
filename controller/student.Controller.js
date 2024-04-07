import studentMODEL from '../model/student.Model.js'

const student = {
    InsertStudent: async (req, res) => {
        const { name, collegeName, studentID } = req.body;
        try {
            const InsertData = await studentMODEL.create({ name, collegeName: collegeName, studentID });
            res.status(201).json(InsertData);
        }
        catch (error) {
            res.status(500).json({ error: "Error During Insertion", msg: error.message });
        }
    },

    getAllStudents: async (req, res) => {
        try {
            const students = await studentMODEL.find({});
            res.json(students)

        } catch (error) {

        }

    },
    getLastStudent: async (req, res, next) => {
        try {
            const lastRCRD = await studentMODEL.find().sort({ $natural: -1 }).limit(1);
            if (!lastRCRD) { return res.json({ msg: 'Server error.' }) }
            res.json(lastRCRD)
        } catch (error) {
            return res.json({ msg: 'Server error.' })
        }
    },

    removeSingelStudent: async (req, res) => {
        try {
            const studentID = req.params.ID;
            console.log(studentID)
            const findANDDEL = await studentMODEL.findByIdAndDelete(studentID);
            if (!findANDDEL) {
                return res.json({ msg: 'No Student Found.' })
            }
            return res.json({ msg: 'Success.' })
        } catch (error) {
            return res.json({ msg: 'Server error 500' })
        }
    }
}


export default student