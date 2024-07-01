import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="home-container">
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
            <Link to={`/view-students/${user._id}`}>
              <button>View Students</button>
            </Link>
            <Link to={`/add-student/${user._id}`}>
              <button>Add Student</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
