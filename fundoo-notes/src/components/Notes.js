import React from "react";
import { useState } from "react";
import NotesIcons from "./NotesIcons";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../css/Notes.css";
import { updateNotes } from "../Services/DataService";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";

const DialogContent = withStyles((theme) => ({
  root: {
    width: 500,
  },
}))(MuiDialogContent);

const Notes = (props) => {
  const [id1, setId1] = useState(props.info.id);
  const [open, setOpen] = useState(false);
  const [noteTitle1, setNoteTitle] = useState(props.info.title);
  const [noteDescription1, setNoteDescription] = useState(
    props.info.description
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    let noteUpdateData = new FormData(); // Currently empty
    noteUpdateData.append("noteId", id1);
    noteUpdateData.append("title", noteTitle1);
    noteUpdateData.append("description", noteDescription1);
    updateNotes(noteUpdateData)
      .then((response) => {
        console.log(response);
        props.displayNote();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const noteTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const noteDescription = (e) => {
    setNoteDescription(e.target.value);
  };
  return (
    <div className="mainContainer">
      <div className="testContainer-note">
        <Card
          style={{ backgroundColor: props.info.color }}
          className="mainNote"
        >
          <h4 id="noteHeader" onClick={handleClickOpen}>
            {props.info.title}
          </h4>
          <CardContent className="noteContent" onClick={handleClickOpen}>
            <Typography>{props.info.description}</Typography>
          </CardContent>
          <div className="display-collab">
          {props.info.collaborators.map((user) => (
                  <Tooltip title={user.email}>
                    <span>
                      <AccountCircleIcon />
                    </span>
                  </Tooltip>
                ))}
           </div>
          <CardActions className="note-icons">
            <NotesIcons
              action="updatenote"
              noteDetails={props.info}
              id={props.info.id}
              displayNote={props.displayNote}
            />
          </CardActions>
        </Card>
      </div>

      <div className="note-dialogContent">
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle
            onClose={handleClose}
            style={{ backgroundColor: props.info.color }}
          >
            <TextareaAutosize
              defaultValue={props.info.title}
              onChange={noteTitle}
              style={{
                border: "none",
                outline: "none",
                width: "95%",
                backgroundColor: props.info.color,
              }}
            />
          </DialogTitle>
          <DialogContent style={{ backgroundColor: props.info.color }}>
            <TextareaAutosize
              defaultValue={props.info.description}
              onChange={noteDescription}
              style={{
                border: "none",
                outline: "none",
                width: "95%",
                backgroundColor: props.info.color,
              }}
            />
          </DialogContent>
          <DialogActions style={{ backgroundColor: props.info.color }}>
            <NotesIcons
              action="updatenote"
              noteDetails={props.info}
              id1={props.info.id}
            />
            <Button onClick={handleClose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default Notes;
