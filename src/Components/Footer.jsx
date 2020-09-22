import React from "react";
import "../Css/Footer.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function Footer() {
  return (
    <div class="footerButtons ">
      <IconButton className="footerButtons_repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="footerButtons_left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="footerButtons_star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="footerButtons_right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="footerButtons_lightning">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default Footer;
