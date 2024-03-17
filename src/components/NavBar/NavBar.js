import "./NavBar.scss";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo/BrainFlix-logo.svg";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Link  to={`/`}>
        <img src={logo} alt="BrainFlix Logo" className="nav__logo" />
      </Link>
      <div className="nav__container">
        <input
            type="search"
          placeholder="Search"
          className="nav__search"
          id="search-input"
        ></input>
        <button onClick={() => {
          navigate("/upload");
        }} className="nav__upload-buttons button-tablet">
          UPLOAD
        </button>
        <div className="nav__avatar"></div>
      </div>
      <button onClick={() => {
        navigate("/upload");
      }} className="nav__upload-buttons button-mobile">
        UPLOAD
      </button>
    </nav>
  );
}

export default Nav;