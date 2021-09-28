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
          arr = arr1.filter((words) =>
            words.title.toLowerCase().includes(props.searchData.toLowerCase())
          );
          setArray(arr);
        } else if (data == "notes") {
          arr = arr1;
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

  useEffect(() => {
    if (props.notesOpen == true) {
      displayNote("notes");
    }
  }, [props.notesOpen]);

  useEffect(() => {
    displayNote("Search");
    
  }, [props.searchData]);

  useEffect(() => {
    if (props.archiveOpen == true) {
      displayNote("archive");
    } else if(props.archiveOpen == false){
      displayNote(" ");
    }
  }, [props.archiveOpen]);

  useEffect(() => {
    console.log(props);
    if (props.trashOpen == true) {
      displayNote("trash");
    } else if(props.trashOpen == false){
      displayNote(" ");
    }
  }, [props.trashOpen]);
  useEffect(() => {
    displayNote(" ")
  }, [])

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
