import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddStudent = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
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
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/students`,
        { ...studentData, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Student added successfully");
      navigate("/");
    } catch (error) {
      console.error("Adding student failed");
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="parentsNumber"
          placeholder="Parents Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="postalAddress"
          placeholder="Postal Address"
          onChange={handleChange}
        />
        <input
          type="text"
          name="addressLine1"
          placeholder="Address Line 1"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastQualified"
          placeholder="Last Qualified"
          onChange={handleChange}
        />
        <input
          type="text"
          name="passing"
          placeholder="Passing"
          onChange={handleChange}
        />
        <input
          type="text"
          name="marksObtained"
          placeholder="Marks Obtained"
          onChange={handleChange}
        />
        <input
          type="text"
          name="occupationOfGuardian"
          placeholder="Occupation of Guardian"
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
