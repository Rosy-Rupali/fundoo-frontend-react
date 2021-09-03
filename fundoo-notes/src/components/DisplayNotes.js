import React from "react";
import { useState } from "react";
import DisplayNotesIcons from "./DisplayNotesIcons";
import "../css/DisplayNotes.css";

const DisplayNotes = () => {
  const [newNote, setNewNote] = useState(false);

  const newNote2 = () => {
    setNewNote(!newNote);
  };

  return (
    <div className="displayNote2-mainContainer" onMouseEnter={newNote2}>
      {newNote ? (
        <>
          {" "}
          <div className="displaynote2-title">
            <img
              id="displaynotes-pin"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg=="
              alt="pin-pic-display"
            />
          </div>
          <div className="displaynote2-paragraph"></div>
          <DisplayNotesIcons />
        </>
      ) : (
        <>
          {" "}
          <div className="displaynote2-title"></div>{" "}
          <div className="displaynote2-paragraph"></div>{" "}
        </>
      )}
    </div>
  );
};
export default DisplayNotes;
