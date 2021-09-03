import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CreateNote1 from "./CreateNote1";
import CreateNote2 from "./CreateNote2";
import DisplayNotes from "./DisplayNotes";
import "../css/DashboardMain.css";

function DashBoard() {
  const [openNote, setOpenNote] = useState(false);
 

  const openNote2 = () => {
    setOpenNote(!openNote);
  };

 
  return (
    <div class="dashboard-main-container">
      <div className="dashboard-header">
        <DashboardHeader />
      </div>
      <div className="createnote-container" onClick={openNote2}>
        {openNote ? <CreateNote2 /> : <CreateNote1 />}
      </div>
      <div className="displaynote-container" >
        <DisplayNotes />
      </div>
    </div>
  );
}
export default DashBoard;
