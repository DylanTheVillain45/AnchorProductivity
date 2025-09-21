import React, { useEffect, useState } from "react";
import api from "../../lib/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const JournalEntry = () => {
  const { logout } = useAuth();
  const [isNewEntry, setIsNewEntry] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const navigate = useNavigate();

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      logout();
      navigate("/login");
    }

    if (isNewEntry) {
      try {
        const res = await api.post(
          "/journals",
          { title, content, date },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Journal Created!")
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await api.put(
          `/journals/${date}`,
          { title, content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Journal Updated!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getJournal = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      logout();
      navigate("/login");
    }
    try {
      const res = await api.get(`/journals/${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.message) {
        setIsNewEntry(true);
        setTitle("");
        setContent("");
      } else {
        setIsNewEntry(false);
        setTitle(res.data.journal.title);
        setContent(res.data.journal.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJournal();
  }, [date]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{date} Entry</h2>

      <div className="flex items-center gap-4 mb-4">
        <label className="font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered"
        />
      </div>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full mb-4"
      />

      <textarea
        placeholder="Write your entry..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea textarea-bordered w-full h-64 mb-4"
      />

      <button onClick={handleSave} className="btn btn-primary">
        {isNewEntry ? "Save Entry" : "Update Entry"}
      </button>
    </div>
  );
};

export default JournalEntry;
