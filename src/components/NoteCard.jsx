import React from "react";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, onEdit, onDelete }) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <h6 className="text-sm font-medium">{title}</h6>
        <div className="grid">
          <span className="text-xs text-slate-500">
            {new Date(date).toDateString()}
          </span>
          <span className="text-xs text-slate-500">
            {new Date(date).toLocaleTimeString()}
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-600 mt-2">{content}</p>
      <div className="flex items-center justify-end mt-2 gap-2">
        <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit} />
        <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete} />
      </div>
    </div>
  );
};

export default NoteCard;
