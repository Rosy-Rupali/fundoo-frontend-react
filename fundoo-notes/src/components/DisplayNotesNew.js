import React, { useEffect } from "react";
import Notes from "./Notes";
import "../css/DisplayNoteNew.css";
import { getNote } from "../Services/DataService";

const DisplayNotesNew = (props) => {
  const [noteArray, setArray] = React.useState([]);

  const displayNote = (data) => {
    getNote()
      .then((response) => {
        let arr1 = response.data.data.data;
        let arr = [];
        if (data == "archive") {
          arr = arr1.filter(
            (note) => note.isArchived == true && note.isDeleted == false
          );
          setArray(arr);
        } else if (data == " ") {
          arr = arr1.filter(
            (note) => note.isArchived == false && note.isDeleted == false
          );
          setArray(arr);
        } else if (data == "trash") {
          arr = arr1.filter(
            (note) => note.isDeleted == true && note.isArchived == false
          );
          setArray(arr);
        } else {
          arr = arr1.filter(
            (note) => note.isDeleted == false && note.isArchived == false
          );
          setArray(arr);
        }
        console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("hiii", props);
    if (props.archiveOpen == true) {
      displayNote("archive");
    } else {
      displayNote(" ");
    }
  }, [props]);

  useEffect(() => {
    console.log("allhello", props);
    if (props.trashOpen == "trash") {
      displayNote("trash");
    } else {
      displayNote(" ");
    }
  }, [props]);

  console.log(noteArray);
  return (
    <div className="displaynotenew-mainContainer">
      <div className="testContainer">
        {noteArray.map((info) => (
          <Notes displayNote={displayNote} info={info} />
        ))}
      </div>
    </div>
  );
};
export default DisplayNotesNew;
