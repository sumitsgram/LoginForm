const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

// Register Student
router.post("/students", async (req, res, next) => {
  const {
    userId,
    name,
    dateOfBirth,
    phoneNumber,
    gender,
    email,
    parentsNumber,
    category,
    postalAddress,
    addressLine1,
    city,
    lastQualified,
    passing,
    marksObtained,
    occupationOfGuardian,
  } = req.body;
  try {
    const student = new Student({
      userId,
      name,
      dateOfBirth,
      phoneNumber,
      gender,
      email,
      parentsNumber,
      category,
      postalAddress,
      addressLine1,
      city,
      lastQualified,
      passing,
      marksObtained,
      occupationOfGuardian,
    });
    await student.save();

    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    console.error("Error during student registration:", error);
    next(error);
  }
});

// Fetch Students
router.get("/students", async (req, res, next) => {
  const { userId } = req.query;
  try {
    console.log("Fetching students for user:", userId); // Add logging
    const students = await Student.find({ userId });
    console.log("Students fetched:", students); // Add logging
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    next(error);
  }
});

// Get details of a specific student
router.get("/students/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error("Error fetching student details:", error);
    next(error);
  }
});

module.exports = router;
