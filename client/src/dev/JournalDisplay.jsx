import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const JournalDisplay = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJournals = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("not signed in");
        return;
      }

      const res = await api.get("/journals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJournals(res.data)
    } catch (error) {
        console.log(error)
    }

  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetchJournals();
  };

  return (
    <div>
      <div>Journals:</div>
      <button className="btn btn-active" onClick={handleClick}>
        Refresh Journals
      </button>
      <div>
        {journals.map((journal) => (
          <div key={journal._id}>
            <div>{journal.title}</div>
            <div>{journal.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalDisplay;
