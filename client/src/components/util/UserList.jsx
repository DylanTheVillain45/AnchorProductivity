import React from "react";
import { useState } from "react";
import api from "../../lib/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = () => {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
    }

    try {
      const res = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      SetUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteAllUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
    }
    try {
      const res = await api.delete(`/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }

    fetchUsers();
  };

  const deleteIndividualUser = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
    }
    try {
      const res = await api.delete(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res)
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-2xl p-6">
      {loading && (
        <div className="text-center text-gray-500 py-6">Loading...</div>
      )}

      {!loading && users.length > 0 && (
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between bg-base-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm">
                <p className="font-medium">{user.email}</p>
                <p className="text-xs text-gray-500">{user.hashedPassword}</p>
              </div>

              <button
                className="btn btn-error btn-sm flex items-center gap-1"
                onClick={() => deleteIndividualUser(user._id)}
              >
                <DeleteIcon className="w-4 h-4" />
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="text-center text-gray-400 py-6">No users found.</div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={deleteAllUsers}
          className="btn btn-warning btn-outline"
        >
          Delete All Users
        </button>
      </div>
    </div>
  );
};

export default UserList;
