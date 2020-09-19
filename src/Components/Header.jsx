import React from "react";
import "../Css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        className="tinder_img"
        src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
      />
      <IconButton>
        <ForumIcon fontSize="large"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default Header;
