import React, { useEffect } from "react";
import Notes from "./Notes";
import "../css/DisplayNoteNew.css";
import { getNote } from "../Services/DataService";

const DisplayNotesNew = () => {
  const [noteArray, setArray] = React.useState([]);
  useEffect(() => {
    getNote()
      .then((response) => {
        setArray(response.data.data.data);
        console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(noteArray);
  const noteList = noteArray.map((info) => <Notes info={info} />);

  return <div className="displaynotenew-mainContainer">{noteList}</div>;
};
export default DisplayNotesNew;
