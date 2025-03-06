import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Modal from "react-modal";
import NoteCard from "../components/NoteCard.jsx";
import { MdAdd } from "react-icons/md";
import EditNote from "./EditNote.jsx";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/api.js";

const Home = () => {
  const [openModal, setOpenModaal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenModaal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/auth/check/user");
      if (response?.data?.user) {
        setUserInfo(response?.data?.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/note");
      if (response?.data?.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("Error occured, can't fetch all notes", error);
    }
  };

  const deleteNote = async (noteDetails) => {
    try {
      const response = await axiosInstance.delete(`/note/${noteDetails._id}`);
      if (!response?.data?.error) {
        getAllNotes();
      }
    } catch (error) {
      console.log("Error occured, wasn't able to delete this note", error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getAllNotes();
    return () => {};
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="container mx-auto">
        {allNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-4">
            {allNotes.map((note) => (
              <NoteCard
                key={note._id}
                content={note.content}
                title={note.title}
                date={note.createdAt}
                onDelete={() => deleteNote(note)}
                onEdit={() => handleEdit(note)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">
              Create a note by using the "Add" Button, no note present
            </p>
          </div>
        )}
      </div>
      <button
        className="size-16 flex justify-center items-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenModaal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openModal.isShown}
        style={{
          overlay: {
            backgroundColour: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        ariaHideApp={false}
        className="max-w-[90%] md:max-w-[60%] max-h-[75%] bg-slate-100 shadow-2xl rounded-md mx-auto mt-40 p-5"
      >
        <EditNote
          type={openModal.type}
          noteData={openModal.data}
          getAllNotes={getAllNotes}
          onClose={() => {
            setOpenModaal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
