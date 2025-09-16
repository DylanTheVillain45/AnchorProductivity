import React from "react";
import { useState } from "react";
import api from "../lib/axios";
import { useEffect } from "react";

const UserList = () => {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      SetUsers(res.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUsers = async () => {
    try {
      const res = await api.delete("/users/deleteAll");
      
    } catch (error) {
      console.log(error)
      
    }

    fetchUsers()
  }

  return (
    <div className="card bg-base-100 shadow-2xl">
      {loading && <div>Loading...</div>}
      {!loading && users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user._id}>
              {user.email}, {user.hashedPassword}
            </div>
          ))}
        </div>
      )}
      <button onClick={deleteUsers}>
        Delete Users
      </button>
    </div>
  );
};

export default UserList;
