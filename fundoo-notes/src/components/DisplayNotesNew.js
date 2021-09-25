import React, { useState, useEffect } from "react";
import Notes from "./Notes";
import "../css/DisplayNoteNew.css";
import { getNote } from "../Services/DataService";
import { connect } from "react-redux";

const DisplayNotesNew = (props) => {
  const [noteArray, setArray] = useState([]);
  const [notes, setNotes] = useState([]);
  const displayNote = (data) => {
    getNote()
      .then((response) => {
        let arr1 = response.data.data.data;
        let arr = [];
        if (data == "Search") {
          console.log(props.searchData)
          arr = arr1.filter((words) =>
            words.title.toLowerCase().includes(props.searchData.toLowerCase())
          );
          setArray(arr);
        }
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
        }
        console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // let selectedNotes = notes;
  // if (props.searchData) {
  //   console.log(props.searchData)
  //   selectedNotes = notes.filter((words) =>
  //     words.title.toLowerCase().includes(props.searchData.toLowerCase())
  //   );
  //   setArray(selectedNotes);
  // }
  useEffect(() => {
    displayNote("Search")
  }, [props.searchData]);

  useEffect(() => {
    console.log(props);
    if (props.archiveOpen == true) {
      displayNote("archive");
    } else {
      displayNote(" ");
    }
  }, [props.archiveOpen]);

  useEffect(() => {
    console.log(props);
    if (props.trashOpen == true) {
      displayNote("trash");
    } else {
      displayNote(" ");
    }
  }, [props.trashOpen]);

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

const mapStateToProps = (state) => {
  return {
    searchData: state.searchBarReducer.searchData,
    
  };
};
export default connect(mapStateToProps)(DisplayNotesNew);
