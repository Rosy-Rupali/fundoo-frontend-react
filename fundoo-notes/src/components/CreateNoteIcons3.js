import React from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import "../css/CreateNoteIcons3.css";

const CreateNoteIcons3 = () => {
  return (
    <div className="createNote3-mainContainer">
      <div className="createNote3-icons">
        <AddAlertOutlinedIcon style={{ fontSize: "medium" }} />
        <PersonAddOutlinedIcon style={{ fontSize: "medium" }} />
        <ColorLensOutlinedIcon style={{ fontSize: "medium" }} />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <ArchiveOutlinedIcon style={{ fontSize: "medium" }} />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
        <UndoOutlinedIcon
          style={{ fontSize: "medium", color: "rgba(0, 0, 0, 0.54)" }}
        />
        <RedoOutlinedIcon
          style={{ fontSize: "medium", color: "rgba(0, 0, 0, 0.54)" }}
        />
      </div>
    </div>
  );
};
export default CreateNoteIcons3;
