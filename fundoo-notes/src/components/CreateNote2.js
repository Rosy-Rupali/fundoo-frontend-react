import React, { useEffect } from "react";
import { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { WriteNote } from "../Services/DataService";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "../css/CreateNote2.css";
import NotesIcons from "./NotesIcons";

const CreateNote2 = (props) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [colour1, setColour1] = useState("#FFF");
  const [archive1, setArchive1] = useState(false);
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

  const collaborator = (data) => {
    props.listentoNote2(data)
  }
  const closeButton = () => {
    let obj = {
      title: title,
      description: description,
      isArchived: archive1,
      color: colour1,
    };
    WriteNote(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickAwayEvent = () => {
    props.listentoNote2("true");
  };

  useEffect(() => {
    console.log({ colour1 });
  }, [colour1]);

  return (
    <ClickAwayListener onClickAway={handleClickAwayEvent}>
      <div
        className="createnote2-mainContainer"
        style={{ backgroundColor: colour1 }}
      >
        <div className="createnote2-testContainer">
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
          <div className="createnote-closeButton">
            <NotesIcons 
            archive={archive} 
            color={color} 
            Collaborator={collaborator}  
            />
          
            <Button onClick={closeButton} style={{ fontSize: "small" }}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
export default CreateNote2;
