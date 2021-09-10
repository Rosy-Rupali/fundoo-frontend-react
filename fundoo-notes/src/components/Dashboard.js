import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CreateNote1 from "./CreateNote1";
import CreateNote2 from "./CreateNote2";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DisplayNotesNew from "./DisplayNotesNew";
import "../css/DashboardMain.css";
import "../css/SideNavbar.css";

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    border: "none",
    paddingLeft: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 6,
      marginTop: 110,
    },
    marginTop: 55,
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(6.7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(17.5) + 1,
      paddingLeft: 6,
      marginTop: 110,
    },
    marginTop: 55,
    border: "none !important",
  },
}));
function DashBoard() {
  const [openNote, setOpenNote] = useState(false);
  const [handleDrawer1, setHandleDrawer] = useState(false);
  const classes = useStyles();

  const handleDrawer = () => {
    setHandleDrawer(!handleDrawer1);
  };

  const inputNote1 = (data) => {
    if (data === "true") {
      setOpenNote(!openNote);
    }
  };
  const inputNote2 = (data) => {
    if (data === "true") {
      setOpenNote(!openNote);
    }
  };
  const handleClickAwayEventDashboard = () => {};
  return (
    <div class="dashboard-main-container">
      <div className="dashboard-header">
        <DashboardHeader handleDrawer={handleDrawer} />
      </div>
      <ClickAwayListener onClickAway={handleClickAwayEventDashboard}>
        <div className="container-sideNavBar">
          <Drawer
            open={handleDrawer1}
            variant="persistent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: handleDrawer1,
              [classes.drawerClose]: !handleDrawer1,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: handleDrawer1,
                [classes.drawerClose]: !handleDrawer1,
              }),
            }}
          >
            {
              <div className="mainConatiner-drawer">
                <div className="testContainer-drawer">
                  <div id="block1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgb(75, 72, 72)"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                    </svg>
                    <NotificationsNoneSharpIcon />
                    <CreateOutlinedIcon />
                    <ArchiveOutlinedIcon />
                    <DeleteOutlinedIcon />
                  </div>
                  <div id="block2">
                    <span>Notes</span>
                    <span>Reminders</span>
                    <span>Edit Labels</span>
                    <span>Archive</span>
                    <span>Trash</span>
                  </div>
                </div>
              </div>
            }
          </Drawer>
        </div>
      </ClickAwayListener>
      <div className="createnote-container">
        {openNote ? (
          <CreateNote2 listentoNote2={inputNote2} />
        ) : (
          <CreateNote1 listentoNote1={inputNote1} />
        )}
      </div>
      <div className="displaynote-container">
      <DisplayNotesNew />
      </div>
    </div>
  );
}
export default DashBoard;
