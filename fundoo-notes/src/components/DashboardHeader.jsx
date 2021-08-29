import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchBar from "material-ui-search-bar";
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import '../css/DashboardHeader.css'

function DashboardHeader(){

return(
        <div className="header">
            <div className="dashboard" id="text-icons">
                <DehazeIcon></DehazeIcon>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img>
                <span>Keep</span>
                </div>
                <div className="searchsection">
                <SearchBar placeholder="search" />
                </div>
                <div className="dashboard">
                <RefreshRoundedIcon></RefreshRoundedIcon>
                <ViewAgendaOutlinedIcon className="icons"></ViewAgendaOutlinedIcon>
                <SettingsIcon></SettingsIcon>
                </div>
                <div className="dashboard">
                <AppsIcon></AppsIcon>
                <img src="https://lh3.googleusercontent.com/ogw/ADea4I6JTDF1nhao1eahgtEuabHZOUDW5B54Zb2hSLx4=s32-c-mo" style={{width:'50px',borderRadius: '50%'}}></img>
            </div>
    </div>
    )
}
export default DashboardHeader;