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
import "../css/Notes.css";
import { updateNotes } from "../Services/DataService";

const DialogContent = withStyles((theme) => ({
  root: {
    width: 500,
  },
}))(MuiDialogContent);

const Notes = (props) => {
  const [id1, setId] = useState(props.info.id)
  const [newNote, setNewNote] = useState(false);
  const [open, setOpen] = useState(false);
  const [noteTitle1, setNoteTitle] = useState(props.info.title);
  const [noteDescription1, setNoteDescription] = useState(
    props.info.description
  );

  const newNote2 = (data) => {
    setNewNote(!newNote);
    console.log(data);
  };
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
    <div className="Note2-mainContainer">
      <div
        className="note-testMainContainer"
        onClick={handleClickOpen}
        onMouseEnter={() => newNote2(props.info)}
      >
        {newNote ? (
          <div
            className="note2-testContainer"
            style={{ backgroundColor: props.info.color }}
          >
            <div className="note2-title">
              <h3>{props.info.title}</h3>
              {/* <img
              id="pin-createnote2"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg=="
              alt="pin-pic">{props.info.isPined}</img> */}
            </div>
            <div className="note2-paragraph"> {props.info.description}</div>
            <NotesIcons
              action="updatenote"
              id={props.info.id}
              noteDetails={props.info}
            />
          </div>
        ) : (
          <div
            className="note2-testContainer"
            style={{ backgroundColor: props.info.color }}
          >
            <div className="note2-title">
              <h3>{props.info.title}</h3>
            </div>
            <div className="note2-paragraph"> {props.info.description}</div>
          </div>
        )}
      </div>
      <div className="note-dialogContent">
        <Dialog
          onClose={handleClose}
          open={open}
        >
          <DialogTitle
            onClose={handleClose}
            style={{ backgroundColor: props.info.color }}
          >
            <TextareaAutosize
              defaultValue={props.info.title}
              onChange={noteTitle}
              style={{ border: "none", backgroundColor: props.info.color }}
            />
          </DialogTitle>
          <DialogContent style={{ backgroundColor: props.info.color }}>
            <TextareaAutosize
              defaultValue={props.info.description}
              onChange={noteDescription}
              style={{ border: "none", backgroundColor: props.info.color }}
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
