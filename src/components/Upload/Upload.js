import React, { useState } from "react";
import "./Upload.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Upload successful!");

    window.location.href = "/home";
  };

  return (
    
    <section className="upload-section">
      <h1 className="upload-section__title">Upload Video</h1>
      <form className="upload-form" onSubmit={handleSubmit}>
        <label htmlFor="upload-image" className="upload-form__label upload-form__image-container">
          VIDEO THUMBNAIL
          <img
            src={uploadImage}
            id="upload-image"
            className="upload-form__image"
            alt="Upload Thumbnail"
          />
        </label>
        <div className="upload-form__inputs">
          <label htmlFor="upload-title" className="upload-form__label">
            TITLE YOUR VIDEO
            <input
              placeholder="Add a title to your video"
              type="text"
              id="upload-title"
              className="upload-form__input"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label htmlFor="upload-description" className="upload-form__label">
            ADD A VIDEO DESCRIPTION
            <textarea
              placeholder="Add a description to your video"
              rows="5"
              required
              type="text"
              id="upload-description"
              className="upload-form__input"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
        </div>
        <div className="upload-section__buttons">
          <button type="submit" className="upload-section__publish">
            PUBLISH
          </button>
          <p className="upload-section__cancel">CANCEL</p>
        </div>
      </form>
    </section>
  );
}

export default Upload;