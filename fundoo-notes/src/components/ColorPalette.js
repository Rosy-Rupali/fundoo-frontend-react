import React from "react";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import { changeColorNotes } from "../Services/DataService";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "0 1px 7px rgb(128, 128, 128)",
    borderRadius: "10px",
    padding: theme.spacing(1),
    width: "140px",
    height: "120px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorBox: {
    border: "2px solid #fff",
    borderRadius: "50px",
    width: "30px",
    height: "30px",
  },
}));

export default function SimpleColourPopper(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [color, setColor] = React.useState("");
  const colorArray = [
    { color: "#fafafa" },
    { color: "#ef9a9a" },
    { color: "#ffcc80" },
    { color: "#fff59d" },
    { color: "#dcedc8" },
    { color: "#b2dfdb" },
    { color: "#e0f7fa" },
    { color: "#4fc3f7" },
    { color: "#b39ddb" },
    { color: "#f8bbd0" },
    { color: "#a1887f" },
    { color: "#cfd8dc" },
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const getColor = (event) => {
    setColor(event.target.id);
    console.log(event.target.id);
    let obj = {
      color: color,
      noteIdList: [props.id1],
    };
    if (props.actionColor === "createnote") {
      props.color(color);
    } else if (props.actionColor === "updatenote") {
      console.log(obj, "hoooooo");
      changeColorNotes(obj)
        .then((response) => {
          props.displayNote();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ColorLensOutlinedIcon
        style={{ fontSize: "medium" }}
        onClick={handleClick}
      />
      <Popper
        onClick={getColor}
        id={open ? "simple-popper" : undefined}
        open={open}
        anchorEl={anchorEl}
      >
        <div className={classes.paper}>
          {colorArray.map((color) => (
            <div
              id={color.color}
              className={classes.colorBox}
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
      </Popper>
    </div>
  );
}
