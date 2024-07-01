
import React, { useState } from "react";
import axios from "axios";

const RegisterStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
    email: "",
    parentsNumber: "",
    category: "",
    postalAddress: "",
    addressLine1: "",
    city: "",
    lastQualified: "",
    passing: "",
    marksObtained: "",
    occupationOfGuardian: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleRegisterStudent = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/students", student, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Student registered successfully");
    } catch (error) {
      console.error("Student registration failed");
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleRegisterStudent}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          name="dateOfBirth"
          value={student.dateOfBirth}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={student.phoneNumber}
          onChange={handleChange}
        />
        <select name="gender" value={student.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Parent's Number"
          name="parentsNumber"
          value={student.parentsNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={student.category}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Postal Address"
          name="postalAddress"
          value={student.postalAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address Line 1"
          name="addressLine1"
          value={student.addressLine1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={student.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Qualified"
          name="lastQualified"
          value={student.lastQualified}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Passing"
          name="passing"
          value={student.passing}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Marks Obtained"
          name="marksObtained"
          value={student.marksObtained}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Occupation of Guardian"
          name="occupationOfGuardian"
          value={student.occupationOfGuardian}
          onChange={handleChange}
        />
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
};

export default RegisterStudent;
