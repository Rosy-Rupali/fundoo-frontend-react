import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CreateNote1 from "./CreateNote1";
import CreateNote2 from "./CreateNote2";
import DisplayNotesNew from "./DisplayNotesNew";
import "../css/DashboardMain.css";

function DashBoard() {
  const [openNote, setOpenNote] = useState('jjh');

  const inputNote1 = (data) => {
    if(data === 'true'){
        setOpenNote(!openNote)
    }
  };
  const inputNote2 = (data) => {
    if(data === 'true'){
        setOpenNote(!openNote)
    }
  };

  return (
    <div class="dashboard-main-container">
      <div className="dashboard-header">
        <DashboardHeader />
      </div>
      <div className="createnote-container">
        {openNote ? (
          <CreateNote2 listentoNote2={inputNote2} />
        ) : (
          <CreateNote1 listentoNote1={inputNote1} />
        )}
      </div>
      <div className="displaynote-container" >
      <DisplayNotesNew />
      </div>
    </div>
  );
}
export default DashBoard;
