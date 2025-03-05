import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Modal from "react-modal";
import NoteCard from "../components/NoteCard.jsx";
import { MdAdd } from "react-icons/md";
import EditNote from "./EditNote.jsx";

const Home = () => {
  const [openModal, setOpenModaal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-4">
          <NoteCard
            content={""}
            title={""}
            date={""}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        </div>
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
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColour: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        ariaHideApp={false}
        className="w-[40%] max-h-[75%] bg-slate-100 shadow-2xl rounded-md mx-auto mt-40 p-5"
      >
        <EditNote
          type={openModal.type}
          noteData={openModal.data}
          onClose={() => {
            setOpenModaal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
