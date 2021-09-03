import React from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import "../css/DisplayNotesIcons.css";

const DisplayNotesIcons = () => {
  return (
    <div className="displayNotesIcons-mainContainer">
      <div className="displayNotes-icons">
        <AddAlertOutlinedIcon style={{ fontSize: "medium" }} />
        <PersonAddOutlinedIcon style={{ fontSize: "medium" }} />
        <ColorLensOutlinedIcon style={{ fontSize: "medium" }} />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <ArchiveOutlinedIcon style={{ fontSize: "medium" }} />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
      </div>
    </div>
  );
};
export default DisplayNotesIcons;
