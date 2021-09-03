import React from "react";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import "../css/CreateNote1.css";

const CreateNote1 = () => {
  return (
    <div className="dummy-box">
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
