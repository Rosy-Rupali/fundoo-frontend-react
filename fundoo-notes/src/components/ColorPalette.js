import React from "react";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import { getThemeProps } from "@material-ui/styles";

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
  const [color, setColor] = React.useState('')
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

  const getColor = (e) =>{
    setColor(e.target.id)
    props.color(color)
    console.log(e.target.id)
  }
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <ColorLensOutlinedIcon
        style={{ fontSize: "medium" }}
        onClick={handleClick}
      />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
          {colorArray.map((color) => (
            <div onClick={getColor} id={color.color}
              className={classes.colorBox}
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
      </Popper>
    </div>
  );
}
