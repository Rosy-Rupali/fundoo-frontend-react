import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { GetEmail } from "../Services/DataService";
import "../css/CreateNote3.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "300px",
    borderRadius: '10px',
    boxShadow: "0 1px 7px rgb(128, 128, 128)",
    width: "300px",
    position: "absolute",
    cursor:"pointer",
    left: '-120px',
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
}));

const CreateNote3 = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [userList, setUserList] = useState([]);
  const [collabList, setCollabList] = useState(props.collablist);
  const open = Boolean(anchorEl);

  const openEmail = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSearchWord(event.target.value);
    let obj = {
      searchWord: searchWord,
    };
    console.log(obj);
    GetEmail(obj)
      .then((response) => {
        setUserList(response.data.data.details);
        console.log(userList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takeCollab = (user) => {
    setCollabList([...collabList, user]);
    props.updateuser([...collabList, user]);
    setAnchorEl(null);
    console.log(user);
  };
  const saveCollab = () => {
    console.log(collabList);
    props.note3("opencreatenote2");
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
          <TextField
            id="standard-basic"
            label="Person or email to share with"
            className="createnote3-account"
            name="searchWord"
            style={{ color: "gray", width: "400px", border: "none" }}
            onChange={openEmail}
          />
          <Popper
            id={open ? "simple-popper" : undefined}
            open={open}
            anchorEl={anchorEl}
          >
            <div className={classes.paper}>
              {userList.map((user) => (
                <div
                  className="user-account"
                  id={user.email}
                  onClick={() => takeCollab(user)}
                >
                  {user.email}
                  <Divider />
                </div>
              ))}
              
            </div>
          </Popper>
        </div>
        <div className="createnote3-footer">
          <button
            className="createnote3-button"
            type="button"
            style={{ fontSize: "large", outline: "none", border: "none" }}
          >
            Close
          </button>
          <button
            className="createnote3-button"
            type="button"
            onClick={saveCollab}
            style={{ fontSize: "large", outline: "none", border: "none" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateNote3;
