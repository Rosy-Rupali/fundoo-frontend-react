import React, { useContext, useEffect, useState } from "react";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SearchBar from "material-ui-search-bar";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "../css/DashboardHeader.css";
import { useHistory } from "react-router";
import { toggleContext } from "./Dashboard";
import { connect } from "react-redux";
import { Logout } from "../Services/DataService";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "80px",
    borderRadius: "10px",
    boxShadow: "0 1px 7px rgb(128, 128, 128)",
    position: "relative",
    right: '30px',
    width: "260px",
    overflow: "hidden",
    paddingTop: "5px",
    paddingLeft: '8px',
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper,
  },
}));
const DashboardHeader = (props) => {
  const classes = useStyles();
  const toggleinfo = useContext(toggleContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleSearchBar = (event) => {
    props.dispatch({ type: "Search", searchData: event });
  };

  const logoutProfile = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const logout = () => {
    Logout()
      .then((res) => {
       
        console.log("logged out successfully", res);
        localStorage.removeItem("token");
        history.push("/signin");
      })
      .catch((err) => {
        console.log( err);
      });
  };
    
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div className="header">
      <div className="dashboard" id="text-icons">
        <DehazeIcon onClick={toggleinfo} />
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo2"
        ></img>
        <span>{props.title}</span>
      </div>
      <div className="searchsection">
        <SearchBar placeholder="Search" onChange={handleSearchBar} />
      </div>
      <div className="dashboard">
        <RefreshRoundedIcon />
        <ViewAgendaOutlinedIcon className="icons" />
        <SettingsIcon />
      </div>
      <div className="dashboard" id="text-icons3">
        <AppsIcon />
        <Avatar onClick={logoutProfile} style={{ backgroundColor: "teal" }}>R</Avatar>
        <Popper
            id={open ? "simple-popper" : undefined}
            open={open}
            anchorEl={anchorEl}
          >
          <div className={classes.paper}>
           <span><AccountCircleIcon /><strong>itrosyrupali4037@gmail.com</strong></span>
          <Button onClick={logout}>Logout</Button>
          </div>
          </Popper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.titleReducer.title,
  };
};
export default connect(mapStateToProps)(DashboardHeader);
