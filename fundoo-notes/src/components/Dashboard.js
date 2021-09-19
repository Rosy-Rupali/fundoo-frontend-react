import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CreateNote1 from "./CreateNote1";
import CreateNote2 from "./CreateNote2";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
    display: "block",
  },
  drawer: {
    width: "200px",
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginTop: "60px !important",
  },
  drawerOpen: {
    width: "180px !important",
    position: "relative !important",
    bottom: "80px !important",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(19.5) + 1,
      paddingLeft: 3,
      marginTop: 44,
    },
    border: "none !important",
    paddingLeft: 0,
    marginTop: "45px !important",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(2.7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6.5) + 1,
      paddingLeft: 3,
      marginTop: 44,
    },
    marginTop: 55,
    position: "relative !important",
    bottom: "100px !important",
    border: "none !important",
  },
}));

const handleDrawer = {
  setHandleDrawer: true,
  handleDrawer1: false,
};

export const toggleContext = React.createContext(handleDrawer);

function DashBoard() {
  const [openNote, setOpenNote] = useState(false);
  const [handleDrawer1, setHandleDrawer] = useState(false);
  const [archiveDrawer, setarchiveDrawer] = useState(false);
  const [trashDrawer, settrashDrawer] = useState(false);
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

  const drawerArchive = () => {
    console.log("openarchive");
    setarchiveDrawer(!archiveDrawer);
    console.log(archiveDrawer);
  };
  const drawerTrash = () => {
    console.log("opentrash");
    settrashDrawer(!trashDrawer);
    console.log(trashDrawer);
  };
  const handleClickAwayEventDashboard = () => {};
  return (
    <div class="dashboard-main-container">
      <div className="dashboard-header">
        <toggleContext.Provider value={handleDrawer}>
          <DashboardHeader />
        </toggleContext.Provider>
      </div>
      <ClickAwayListener onClickAway={handleClickAwayEventDashboard}>
        <div className="container-sideNavBar">
          <Drawer
            variant="permanent"
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
            <List className="drawer-expanded">
              <ListItem button>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(75, 72, 72)"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText>Notes</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsNoneSharpIcon />
                </ListItemIcon>
                <ListItemText>Reminders</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CreateOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Edit labels</ListItemText>
              </ListItem>
              <ListItem button onClick={drawerArchive}>
                <ListItemIcon>
                  <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Archives</ListItemText>
              </ListItem>
              <ListItem button onClick={drawerTrash}>
                <ListItemIcon>
                  <DeleteOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Trash</ListItemText>
              </ListItem>
            </List>
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
        <DisplayNotesNew archiveOpen={archiveDrawer} trashOpen={trashDrawer} />
      </div>
    </div>
  );
}
export default DashBoard;
