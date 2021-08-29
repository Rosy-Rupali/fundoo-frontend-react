import React from "react";
import { useState } from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import Button from "@material-ui/core/Button";
import "../css/createnote.css";

const CreateNote = () => {
  const [show, setShow] = useState(false);

  const expandIt = () => {
    setShow(true);
  };

  const normal = () => {
    setShow(false);
  };
  return (
    <div className="header2" onDoubleClick={normal}>
      <form id="form1">
        {show && (
          <input
            className="forminput1"
            type="text"
            placeholder="Title"
            name="title"
          />
        )}


        <p>
        <TextareaAutosize className="forminput2" aria-label="empty textarea" placeholder="Take a Note..."  onClick={expandIt} />
          {/* <textarea
            className="forminput2"
            placeholder="Take a Note..."
            name="content"
            onClick={expandIt}
          ></textarea> */}
        </p>
        {show && (
          <div id="icons">
            <AddAlertOutlinedIcon
              style={{ fontSize: "medium" }}
            ></AddAlertOutlinedIcon>
            <PersonAddOutlinedIcon
              style={{ fontSize: "medium" }}
            ></PersonAddOutlinedIcon>
            <ColorLensOutlinedIcon
              style={{ fontSize: "medium" }}
            ></ColorLensOutlinedIcon>
            <ImageOutlinedIcon
              style={{ fontSize: "medium" }}
            ></ImageOutlinedIcon>
            <ArchiveOutlinedIcon
              style={{ fontSize: "medium" }}
            ></ArchiveOutlinedIcon>
            <MoreVertOutlinedIcon
              style={{ fontSize: "medium" }}
            ></MoreVertOutlinedIcon>
            <UndoOutlinedIcon style={{ fontSize: "medium" }}></UndoOutlinedIcon>
            <RedoOutlinedIcon style={{ fontSize: "medium" }}></RedoOutlinedIcon>
            <Button style={{ fontSize: "small" }}>Close</Button>
          </div>
        )}
      </form>
    </div>
  );
};
export default CreateNote;
