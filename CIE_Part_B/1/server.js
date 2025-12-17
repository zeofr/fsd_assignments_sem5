/*
Question 1:
Write a Complaint Management API using Node.js, Express, and MongoDB with the following features:
• Each complaint should include: Complaint ID, User Name, Issue, and Status.
• Implement a POST route to submit a new complaint.
• Implement a PUT route to update the status of a complaint (e.g., "In Progress", "Resolved").
• Implement a GET route to retrieve all complaints that are currently pending.
*/

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static("."));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let complaintsCollection;

async function connectDB() {
    await client.connect();
    const db = client.db("complaint_management");
    complaintsCollection = db.collection("complaints");
    console.log("MongoDB connected!");
}

connectDB();


// ✅ SUBMIT NEW COMPLAINT
app.post("/complaints", async (req, res) => {
    try {
        const { userName, issue } = req.body;

        // Generate complaint ID
        const count = await complaintsCollection.countDocuments();
        const complaintId = `CMP${String(count + 1).padStart(4, '0')}`;

        const complaint = {
            complaintId,
            userName,
            issue,
            status: "Pending",
            createdAt: new Date()
        };

        await complaintsCollection.insertOne(complaint);
        res.json({ message: "Complaint submitted", complaintId });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ UPDATE COMPLAINT STATUS
app.put("/complaints/status", async (req, res) => {
    try {
        const { complaintId, status } = req.body;

        const result = await complaintsCollection.updateOne(
            { complaintId },
            { "$set": { status, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Complaint not found" });
        }

        res.json({ message: "Status updated", complaintId, status });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET ALL PENDING COMPLAINTS
app.get("/complaints/pending", async (req, res) => {
    try {
        const pending = await complaintsCollection.find({ status: "Pending" }).toArray();
        res.json(pending);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET ALL COMPLAINTS
app.get("/complaints", async (req, res) => {
    try {
        const all = await complaintsCollection.find().toArray();
        res.json(all);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ START SERVER
app.listen(3000, () => {
    console.log("Server is now listening on port 3000");
});
