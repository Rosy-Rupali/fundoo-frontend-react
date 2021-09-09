import React from "react";
import "../components/CreateNote3";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SimpleSnackbar from "../components/ArchiveIcon";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SimpleColourPopper from "../components/ColorPalette";
import "../css/NotesIcons.css";

const NotesIcons = (props) => {
  const handleCollaborator = () => {
    props.Collaborator('collab')
  };
  return (
    <div className="displayNotesIcons-mainContainer">
      <div className="displayNotes-icons">
        <AddAlertOutlinedIcon style={{ fontSize: "medium" }} />
        <PersonAddOutlinedIcon 
          onClick={handleCollaborator}
          style={{ fontSize: "medium" }}
        />

        <SimpleColourPopper color={props.color} />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <SimpleSnackbar archive={props.archive} />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
      </div>
    </div>
  );
};
export default NotesIcons;
