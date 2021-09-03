import React from "react";
import { useState } from "react";
import CreateNoteIcons3 from "./CreateNoteIcons3";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { WriteNote } from "../Services/DataService";
import "../css/CreateNote2.css";

const CreateNote2 = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

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
    };
    WriteNote(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createnote2-mainContainer">
      <div className="createnote2-testContainer">
        <div className="title-createnote2">
          <input
            id="para-createnote2"
            type="text"
            placeholder="Title"
            onChange={setTitle}
            name="title"
          />
          <img
            id="pin-createnote2"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg=="
            alt="pin-pic"
          />
        </div>
        <p>
          <TextareaAutosize
            id="forminput2"
            aria-label="empty textarea"
            placeholder="Take a note..."
            onChange={setDescription}
          />
        </p>
        <div className="createnote-closeButton">
          <CreateNoteIcons3 />
          <Button onClick={closeButton} style={{ fontSize: "small" }}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreateNote2;
