import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addReminder } from "../Services/DataService";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "10px",
    boxShadow: "0 1px 7px rgb(128, 128, 128)",
    width: "250px",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flexWrap: "wrap",
    marginLeft: "200px",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    alignSelf: "center",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    paddingTop: "10px",
  },
}));

export default function DateNTimePickers(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectDate, setTheDate] = useState(new Date(""));
  const [selectTime, setTheTime] = useState("");
  const open = Boolean(anchorEl);

  const handleReminder = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const dateandTimeChange = () => {};
  const dateChange = (event) => {
    setTheDate(event.target.value);
    console.log(event.target.value);
  };

  const timeChange = (event) => {
    setTheTime(event.target.value);
    console.log(event.target.value);
  };

  const saveReminder = () => {
    if (props.actionReminder == "createnote") {
      props.reminder(selectDate, selectTime);
      setAnchorEl(null);
    } else if (props.actionReminder == "updatenote") {
      let reminder1 = [];
      reminder1 = selectDate + "T" + selectTime;
      console.log(reminder1, "rosyyyyyy");
      let obj = {
        noteIdList: [props.id1],
        reminder: reminder1,
      };
      addReminder(obj)
        .then((response) => {
          props.displayNote();
          props.details();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      }
  };
  return (
    <div>
      <AddAlertOutlinedIcon
        onClick={handleReminder}
        style={{ fontSize: "medium" }}
      />
      <Popper
        className={classes.paper}
        id={open ? "simple-popper" : undefined}
        open={open}
        anchorEl={anchorEl}
      >
        <TextField
          id="date"
          label="Pick date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={dateChange}
        />
        <TextField
          id="time"
          label="Pick time"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={timeChange}
        />

        <Button onClick={saveReminder}>save</Button>
      </Popper>
    </div>
  );
}
