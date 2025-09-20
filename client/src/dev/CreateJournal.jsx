import React, { useState } from "react";
import api from "../lib/axios";

const CreateJournal = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("not signed in");
        return;
      }

      api.post(
        "/journals",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl">
      <form className="card-body" onSubmit={handleSumbit}>
        <h2 className="card-title">New Journal Entry</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter a title"
            className="input input-bordered"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-32"
            placeholder="Write your thoughts..."
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary">
            Save Journal
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJournal;
