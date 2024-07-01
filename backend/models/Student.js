const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  parentsNumber: { type: String, required: true },
  category: { type: String, required: true },
  postalAddress: { type: String, required: true },
  addressLine1: { type: String, required: true },
  city: { type: String, required: true },
  lastQualified: { type: String, required: true },
  passing: { type: String, required: true },
  marksObtained: { type: String, required: true },
  occupationOfGuardian: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
