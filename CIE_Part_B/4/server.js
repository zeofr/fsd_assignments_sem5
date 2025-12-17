/*
Question 4:
Develop a Node.js application using Express and MongoDB to manage hospital data with the following requirements:
• Accept and store hospital details: Hospital_ID, Name, Location, Total_Beds, and Occupied_Beds using a web form.
• Store this information in a MongoDB collection.
• Implement a GET route to display all hospitals where available beds (Total_Beds - Occupied_Beds) are less than 10.
• Implement a POST route to admit a patient, which will increment the Occupied_Beds count for the specified hospital.
*/

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static("."));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let hospitalsCollection;

async function connectDB() {
    await client.connect();
    const db = client.db("hospital_management");
    hospitalsCollection = db.collection("hospitals");
    console.log("MongoDB connected!");
}

connectDB();


// ✅ ADD HOSPITAL
app.post("/hospitals", async (req, res) => {
    try {
        const { hospitalId, name, location, totalBeds, occupiedBeds } = req.body;

        const hospital = {
            hospitalId,
            name,
            location,
            totalBeds: Number(totalBeds),
            occupiedBeds: Number(occupiedBeds),
            createdAt: new Date()
        };

        await hospitalsCollection.insertOne(hospital);
        res.json({ message: "Hospital saved", hospitalId });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET ALL HOSPITALS
app.get("/hospitals", async (req, res) => {
    try {
        const all = await hospitalsCollection.find().toArray();
        res.json(all);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ GET HOSPITALS WITH LESS THAN 10 AVAILABLE BEDS
app.get("/hospitals/low-beds", async (req, res) => {
    try {
        const hospitals = await hospitalsCollection.find().toArray();
        
        // Filter hospitals where available beds < 10
        const lowBedHospitals = hospitals.filter(hospital => {
            const availableBeds = hospital.totalBeds - hospital.occupiedBeds;
            return availableBeds < 10;
        });
        
        res.json(lowBedHospitals);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ ADMIT PATIENT (INCREMENT OCCUPIED BEDS)
app.post("/hospitals/admit", async (req, res) => {
    try {
        const { hospitalId } = req.body;

        // First, get the hospital to check if there are available beds
        const hospital = await hospitalsCollection.findOne({ hospitalId });
        
        if (!hospital) {
            return res.status(404).json({ error: "Hospital not found" });
        }

        if (hospital.occupiedBeds >= hospital.totalBeds) {
            return res.status(400).json({ error: "No available beds in this hospital" });
        }

        // Increment occupied beds
        const result = await hospitalsCollection.updateOne(
            { hospitalId },
            { "$inc": { occupiedBeds: 1 }, "$set": { updatedAt: new Date() } }
        );

        const updatedHospital = await hospitalsCollection.findOne({ hospitalId });
        res.json({ 
            message: "Patient admitted successfully", 
            hospitalId,
            occupiedBeds: updatedHospital.occupiedBeds,
            availableBeds: updatedHospital.totalBeds - updatedHospital.occupiedBeds
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});


// ✅ START SERVER
app.listen(3000, () => {
    console.log("Server is now listening on port 3000");
});
