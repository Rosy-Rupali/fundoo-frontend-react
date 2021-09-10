import React, { useEffect } from "react";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import "../css/CreateNote1.css";

const CreateNote1 = (props) => {
  const WritingNote = () => {
    props.listentoNote1('true')
  }
  useEffect(() =>{
    console.log(props)
  },[props])
  return (
    <div className="dummy-box" onClick={WritingNote}>
      <div className="dummy-createnote1">
        <p id="para-createnote1">Take a note. . .</p>
        <div className="icons-createnote1">
          <CheckBoxOutlinedIcon />
          <BrushOutlinedIcon />
          <ImageOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default CreateNote1;
