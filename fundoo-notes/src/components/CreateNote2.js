import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { WriteNote } from "../Services/DataService";
import CreateNote3 from "./CreateNote3";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../css/CreateNote2.css";
import NotesIcons from "./NotesIcons";
import Tooltip from "@material-ui/core/Tooltip";

const CreateNote2 = (props) => {
  const [title, settitle] = useState("");
  const [createNote, setCreateNote] = useState(true);
  const [description, setdescription] = useState("");
  const [colour1, setColour1] = useState("#FFF");
  const [archive1, setArchive1] = useState(false);
  const [trash1, setTrash1] = useState(false);
  const [users, setUsers] = useState([]);
  const [reminder, setReminder] = useState("");
  const [collabArray, setCollabArray] = useState([]);
  const [isPined, setIsPined] = useState(false);
  // const pin = () => {
  //   setIsPined(!isPined);
  // };

  const archive = (data) => {
    setArchive1(data);
    console.log(data);
  };

  const color = (data1) => {
    setColour1(data1);
    console.log(data1);
  };
  const setTitle = (e) => {
    settitle(e.target.value);
    console.log(e.target.value);
  };

  const setDescription = (e) => {
    setdescription(e.target.value);
    console.log(e.target.value);
  };

  const closeButton = () => {
    let obj = {
      title: title,
      description: description,
      isArchived: archive1,
      // isDeleted: trash1,
      color: colour1,
      collaberators: collabArray,
      // reminder: reminder,
    };
    WriteNote(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const collaborator = () => {
    setCreateNote(!createNote);
  };
  const openCreateNote2 = (data, collabList) => {
    if (data === "opencreatenote2") {
      console.log(JSON.stringify(collabList));
      setCreateNote(!createNote);
      setCollabArray(collabList);
    }
  };

  const handleClickAwayEvent = () => {
    props.listentoNote2("true");
  };

  useEffect(() => {
    console.log({ colour1 });
  }, [colour1]);

  const displayReminder = (date, time) => {
    let a = date.concat("T");
    let b = time;
    setReminder(a.concat(b));
    console.log(reminder);
  };
  // const trash = (data) => {
  //   console.log(data);
  //   setTrash1(data);
  // };
  const close = () => {};
  return (
    <ClickAwayListener onClickAway={handleClickAwayEvent}>
      <div className="takenormalnote">
        {createNote ? (
          <div className="createnote2-mainContainer">
            <div
              className="createnote2-testContainer"
              style={{ backgroundColor: colour1 }}
            >
              <div className="title-createnote2">
                <input
                  id="para-createnote2"
                  type="text"
                  placeholder="Title"
                  onChange={setTitle}
                  name="title"
                  style={{ backgroundColor: "transparent" }}
                />
                {/* <img onClick={pin}
            id="pin-createnote2"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg=="
            alt="pin-pic"
          /> */}
              </div>
              <p>
                <TextareaAutosize
                  id="forminput2"
                  aria-label="empty textarea"
                  placeholder="Take a note..."
                  onChange={setDescription}
                  style={{ backgroundColor: "transparent" }}
                />
              </p>
              <div className="user-account">
                {users.map((user) => (
                  <Tooltip title={user.email}>
                    <span>
                      <AccountCircleIcon />
                    </span>
                  </Tooltip>
                ))}
              </div>
              <div className="reminder-display">{displayReminder}</div>
              <div className="createnote-closeButton">
                <NotesIcons
                  archive={archive}
                  color={color}
                  Collaborator={collaborator}
                  reminder={displayReminder}
                  // trash={trash}
                  action="createnote"
                />
                <Button
                  onClick={closeButton}
                  close={close}
                  style={{ fontSize: "small" }}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CreateNote3
              note3={openCreateNote2}
              updateuser={setUsers}
              collablist={users}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default CreateNote2;
