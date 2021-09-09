import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CreateNote1 from "./CreateNote1";
import CreateNote2 from "./CreateNote2";
import CreateNote3 from "./CreateNote3";
import DisplayNotesNew from "./DisplayNotesNew";
import "../css/DashboardMain.css";

function DashBoard() {
  const [openNote, setOpenNote] = useState("one");

  const inputNote1 = (data) => {
    if (data === "true") {
      setOpenNote("two");
    }
  };
  const inputNote2 = (data) => {
    if (data === "true") {
      setOpenNote("one");
    } else if (data === "collab") {
      setOpenNote("collab");
    }
  };

  return (
    <div class="dashboard-main-container">
      <div className="dashboard-header">
        <DashboardHeader />
      </div>
      <div className="createnote-container">
        {openNote == "two" ? (
          <CreateNote2 listentoNote2={inputNote2} />
        ) : openNote == "one" ? (
          <CreateNote1 listentoNote1={inputNote1} />
        ) : openNote == "collab" ? (
          <CreateNote3 />
        ) : (
          <div> </div>
        )}
      </div>
      <div className="displaynote-container">
        <DisplayNotesNew />
      </div>
    </div>
  );
}
export default DashBoard;
