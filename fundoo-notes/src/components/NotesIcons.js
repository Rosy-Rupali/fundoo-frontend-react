import React from "react";
import "../components/CreateNote3";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SimpleSnackbar from "../components/ArchiveIcon";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SimpleColourPopper from "../components/ColorPalette";
import "../css/NotesIcons.css";
import DateNTimePickers from "./DateNTimePicker";

const NotesIcons = (props) => {

  // const handleReminder = () => {
   
  // // }
 
  const handleCollaborator = () => {
    props.Collaborator();
  };
  return (
    <div className="displayNotesIcons-mainContainer">
      <div className="displayNotes-icons">
      <DateNTimePickers reminder={ props.reminder} />
        <PersonAddOutlinedIcon
          onClick={handleCollaborator}
          style={{ fontSize: "medium" }}
        />

        <SimpleColourPopper color={props.color} />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <SimpleSnackbar archive={props.archive} actionArchive={props.action} details={props.noteDetails} />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
      </div>
    </div>
  );
};
export default NotesIcons;
