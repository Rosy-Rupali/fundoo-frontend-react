import React from "react";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { archiveNotes } from "../Services/DataService";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);

  const handleClick = () => {
    setIsArchive(!isArchive);
    setOpen(true);
    console.log(props.actionArchive, "hiuihiu");
    if (props.actionArchive === "createnote") {
      props.archive(isArchive);
    } else if (props.actionArchive === "updatenote") {
      let obj = {
        isArchived: true,
        noteIdList: [props.id1]
      };
      console.log(obj)
      archiveNotes(obj)
        .then((response) => {
          props.displayNote();
          props.details();
          console.log(response);
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <ArchiveOutlinedIcon
        style={{ fontSize: "medium" }}
        onClick={handleClick}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived"
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
    </div>
  );
}
