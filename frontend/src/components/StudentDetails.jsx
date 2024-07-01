import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/students/${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Failed to fetch student details");
      }
    };

    fetchStudentDetails();
  }, [studentId]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Date of Birth: {student.dateOfBirth}</p>
      <p>Phone Number: {student.phoneNumber}</p>
      <p>Gender: {student.gender}</p>
      <p>Email: {student.email}</p>
      <p>Parents Number: {student.parentsNumber}</p>
      <p>Category: {student.category}</p>
      <p>Postal Address: {student.postalAddress}</p>
      <p>Address Line 1: {student.addressLine1}</p>
      <p>City: {student.city}</p>
      <p>Last Qualified: {student.lastQualified}</p>
      <p>Passing: {student.passing}</p>
      <p>Marks Obtained: {student.marksObtained}</p>
      <p>Occupation of Guardian: {student.occupationOfGuardian}</p>
    </div>
  );
};

export default StudentDetails;
