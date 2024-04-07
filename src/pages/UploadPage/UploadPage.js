import './UploadPage.scss';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Upload from "../../components/Upload/Upload.js";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const notify = () => toast.success('🦄 Upload successful!', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notify();
    setTimeout(() => navigate('/'), 6000);
  };

  const handleCancelClick = () => {
    navigate('/')
  }


  return (
    <>
      <Upload title={title} description={description} handleSubmit={handleSubmit} handleTitleChange={handleTitleChange} handleCancelClick={handleCancelClick} handleDescriptionChange={handleDescriptionChange} />
      <ToastContainer />

    </>
  )
}

export default UploadPage;