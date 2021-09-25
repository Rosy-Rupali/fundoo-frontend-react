import React, { useContext, useEffect, useState } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchBar from "material-ui-search-bar";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "../css/DashboardHeader.css";
import { toggleContext } from "./Dashboard";
import { connect } from "react-redux";

const DashboardHeader = (props) => {
  const toggleinfo = useContext(toggleContext);

  const handleSearchBar = (event) => {
    console.log(event)
    props.dispatch({ type: "Search", searchData: event });
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
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I6JTDF1nhao1eahgtEuabHZOUDW5B54Zb2hSLx4=s32-c-mo"
          style={{ width: "50px", borderRadius: "50%" }}
          alt="logo3"
        ></img>
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
