import './UploadPage.scss';

import { React } from 'react';

import NavBar from "../../components/NavBar/NavBar.js";
import Upload from "../../components/Upload/Upload.js";

function UploadPage() {
  return (
    <>
        <NavBar />
      <Upload/>
    </>
  )
}

export default UploadPage;