import React, { useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SimpleSnackbar from "../components/ArchiveIcon";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SimpleColourPopper from "../components/ColorPalette";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "../css/NotesIcons.css";
import DateNTimePickers from "./DateNTimePicker";
import { trashNotes } from "../Services/DataService";

const NotesIcons = (props) => {
  const [open, setOpen] = React.useState(false);
  const [trash, setIsTrashed] = React.useState(false);

  const handleCollaborator = (user) => {
    if (props.action == "createnote") {
      props.Collaborator();
    } else if (props.action == "updatenote") {
      // let id = props.info.id;
      // let data = user;
      // add
    }
  };

  const handleTrash = () => {
    setIsTrashed(true);
    setOpen(true);

    console.log(props.trash, "hello");
    if (props.action === "createnote") {
      props.trash();
    } else if (props.action === "updatenote") {
      let obj = {
        isDeleted: true,
        noteIdList: [props.id],
      };
      trashNotes(obj)
        .then((response) => {
          props.displayNote();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log(props);
  }, [props]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="displayNotesIcons-mainContainer">
      <div className="displayNotes-icons">
        <DateNTimePickers
          reminder={props.reminder}
          displayNote={props.displayNote}
          actionReminder={props.action}
          details={props.noteDetails}
          id1={props.id}
        />
        <PersonAddOutlinedIcon
          onClick={handleCollaborator}
          style={{ fontSize: "medium" }}
        />

        <SimpleColourPopper
          color={props.color}
          actionColor={props.action}
          details={props.noteDetails}
          id1={props.id}
          displayNote={props.displayNote}
        />
        <ImageOutlinedIcon style={{ fontSize: "medium" }} />
        <SimpleSnackbar
          archive={props.archive}
          actionArchive={props.action}
          details={props.noteDetails}
          id1={props.id}
          displayNote={props.displayNote}
        />

        <DeleteOutlineOutlinedIcon
          style={{ fontSize: "medium" }}
          onClick={handleTrash}
          trash={props.trash}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Note is deleted"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <MoreVertOutlinedIcon style={{ fontSize: "medium" }} />
      </div>
    </div>
  );
};
export default NotesIcons;
