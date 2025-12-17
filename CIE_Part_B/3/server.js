/*
Question 3:
Build an Internship Tracking System using Node.js, Express, and MongoDB with the following requirements:
• Create a MongoDB collection to store internship details with fields:
  Student_ID, Name, Company, Duration, and Status.
• Accept internship data through a web form and store it in the database.
• Implement a GET route to display all students interning at "Infosys".
• Implement a PUT route to update the status when a student's internship is marked as completed.
*/

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static("."));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let internshipsCollection;

async function connectDB() {
    await client.connect();
    const db = client.db("internship_tracking");
    internshipsCollection = db.collection("internships");
    console.log("MongoDB connected!");
}

connectDB();


// ✅ ADD INTERNSHIP
app.post("/internships", async (req, res) => {
    try {
        const { studentId, name, company, duration } = req.body;

        const internship = {
            studentId,
            name,
            company,
            duration,
            status: "Ongoing",
            createdAt: new Date()
        };

        await internshipsCollection.insertOne(internship);
        res.json({ message: "Internship saved", studentId });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET ALL INTERNSHIPS
app.get("/internships", async (req, res) => {
    try {
        const all = await internshipsCollection.find().toArray();
        res.json(all);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET STUDENTS INTERNING AT INFOSYS
app.get("/internships/infosys", async (req, res) => {
    try {
        const infosysInterns = await internshipsCollection.find({ 
            company: { $regex: /^Infosys$/i } 
        }).toArray();
        
        res.json(infosysInterns);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ MARK INTERNSHIP AS COMPLETED
app.put("/internships/complete", async (req, res) => {
    try {
        const { studentId } = req.body;

        const result = await internshipsCollection.updateOne(
            { studentId },
            { "$set": { status: "Completed", completedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Internship not found" });
        }

        res.json({ message: "Internship marked as completed", studentId });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ START SERVER
app.listen(3000, () => {
    console.log("Server is now listening on port 3000");
});
