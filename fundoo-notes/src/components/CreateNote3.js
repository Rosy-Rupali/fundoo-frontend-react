import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "../css/CreateNote3.css";
const CreateNote3 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="createnote3-mainContainer">
      <div className="createnote3-testContainer">
        <div className="createnote3-header">
          <h2>Collaborators</h2>
          <hr />
        </div>
        <div className="logo-createnote3">
          <Avatar style={{ backgroundColor: "teal" }}>R</Avatar>
          <div className="createnote3-account">
            <p>
              <strong>Rosy Rupali (Owner)</strong>
              <br />
              itrosyrupali4037@gmail.com
            </p>
          </div>
        </div>
        <div className="logo-createnote3">
          <Avatar
            style={{ backgroundColor: "#fff", border: "1px solid black" }}
          >
            <PersonAddIcon style={{ color: "gray" }} />
          </Avatar>
          <p className="createnote3-account" style={{ color: "gray" }}>
            Person or email to share with
          </p>
        </div>
        <div className="createnote3-footer">
          <button
            className="createnote3-button"
            type="button"
            style={{ fontSize: "large", outline: "none", border: "none" }}
            onClick={handleClick}
          >
            Close
          </button>
          <button
            className="createnote3-button"
            type="button"
            style={{ fontSize: "large", outline: "none", border: "none" }}
            onClick={handleClick}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateNote3;
