import React, { useEffect } from "react";
import Notes from "./Notes";
import "../css/DisplayNoteNew.css";
import { getNote } from "../Services/DataService";
import { getThemeProps } from "@material-ui/styles";

const DisplayNotesNew = (props) => {
  const [noteArray, setArray] = React.useState([]);

  const displayNote = () => {
    getNote()
      .then((response) => {
        setArray(response.data.data.data);
        console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    displayNote();
  }, []);

  
  console.log(noteArray);
  const noteList = noteArray.map((info) => (
    <Notes noteId={props.noteId} displayNote={displayNote} info={info} />
  ));
  return <div className="displaynotenew-mainContainer">{noteList}</div>;
};
export default DisplayNotesNew;
