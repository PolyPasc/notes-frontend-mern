import { useState } from "react";
import { MdClose } from "react-icons/md";
import axiosInstance from "../utils/api.js";

const EditNote = ({ noteData, type, onClose, getAllNotes }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [error, setError] = useState(null);

  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/note", { title, content });
      if (response?.data?.note) {
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };
  const editNode = async () => {
    try {
      const response = await axiosInstance.put(`/note/${noteData._id}`);
      if (response?.data?.note) {
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the Title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNode();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="size-5 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-600"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Content</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 bg-slate-50 p-2 rounded outline-none"
          placeholder="Enter Content"
          content={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {error && <p className="text-red-600 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        {type === "Edit" ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default EditNote;
