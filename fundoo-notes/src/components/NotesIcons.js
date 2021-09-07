import React from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SimpleSnackbar from '../components/ArchiveIcon'
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SimpleColourPopper from "../components/ColorPalette";
import "../css/NotesIcons.css";

const NotesIcons = () => {
  return (
    <div className="displayNotesIcons-mainContainer">
      <div className="displayNotes-icons">
        <AddAlertOutlinedIcon style={{ fontSize: "medium" }} />
        <PersonAddOutlinedIcon style={{ fontSize: "medium" }} />
        <SimpleColourPopper />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <SimpleSnackbar />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
      </div>
    </div>
  );
};
export default NotesIcons;
