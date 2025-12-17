/*
Question 2:
Write a Node.js application using Express and MongoDB with the following functionality:
• Accept student details via a web form: Student_name, USN, Semester, and Exam_fee.
• Store the submitted data in a MongoDB collection.
• Implement a feature to delete all students from the database who have not paid the exam fee (Exam_fee = 0 or null).
*/

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static("."));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let studentsCollection;

async function connectDB() {
    await client.connect();
    const db = client.db("student_management");
    studentsCollection = db.collection("students");
    console.log("MongoDB connected!");
}

connectDB();


// ✅ ADD STUDENT
app.post("/students", async (req, res) => {
    try {
        const { studentName, usn, semester, examFee } = req.body;

        const student = {
            studentName,
            usn,
            semester: Number(semester),
            examFee: Number(examFee),
            createdAt: new Date()
        };

        await studentsCollection.insertOne(student);
        res.json({ message: "Student saved", usn });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET ALL STUDENTS
app.get("/students", async (req, res) => {
    try {
        const all = await studentsCollection.find().toArray();
        res.json(all);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ DELETE STUDENTS WITH UNPAID FEES
app.delete("/students/unpaid", async (req, res) => {
    try {
        // Delete students where examFee is 0 or null
        const result = await studentsCollection.deleteMany({
            $or: [
                { examFee: 0 },
                { examFee: null },
                { examFee: { $exists: false } }
            ]
        });

        console.log(`Deleted ${result.deletedCount} students with unpaid fees`);
        res.json({ message: "Unpaid students deleted", deletedCount: result.deletedCount });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ START SERVER
app.listen(3000, () => {
    console.log("Server is now listening on port 3000");
});
