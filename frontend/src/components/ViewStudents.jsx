import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewStudents = () => {
  const { userId } = useParams();
  const [students, setStudents] = useState([]);

  const fetchStudents = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/students?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className="view-students-container">
      <h2>Registered Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email}
            <Link to={`/student-details/${student._id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudents;
