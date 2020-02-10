import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Card, CardContent, Avatar, Grid } from "@material-ui/core";
import { withStyles, withTheme } from "@material-ui/core/styles";
import styles from "../styles/dashboard_styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "../styles/dashboard.css";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import CreateIcon from "@material-ui/icons/Create";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import FindTeachers from "../components/findTeachers";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import Group from "./groups";
import Profile from "./profile";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open_drawer: false
    };
  }

  handleDrawerToggle() {
    this.setState({
      open_drawer: !this.state.open_drawer
    });
  }

  render() {
    const { classes, theme } = this.props;
    const drawer = (
      <div>
        <Card elevation={0}>
          <CardContent>
            <Grid container>
              <Grid item xs={4}>
                <Avatar alt="S">S</Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  style={{ fontSize: "15px" }}
                >
                  Soujanna Dutta
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Student
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.toolbar} />
        <Typography
          style={{
            color: "#0097A7",
            marginLeft: "10px",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "-70px"
          }}
        >
          Pages
        </Typography>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon></SearchIcon>
              </ListItemIcon>
              <ListItemText primary="Find Teachers" />
            </ListItem>
          </Link>
          <Link to="/group" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon></PeopleIcon>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <CreateIcon></CreateIcon>
            </ListItemIcon>
            <ListItemText primary="Create New" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsIcon></NotificationsIcon>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </List>
        <Typography
          style={{
            color: "#0097A7",
            marginLeft: "10px",
            fontSize: "15px",
            fontWeight: "bold"
          }}
        >
          Support
        </Typography>
        <List>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon></RecentActorsIcon>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon></PeopleIcon>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classes.appBar}
            color="primary"
            elevation={0}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle.bind(this)}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap className={classes.title}>
                Teacher_Recommend
              </Typography>
              <IconButton
                aria-label="add"
                size="small"
                className={classes.margin}
                style={{ color: "white" }}
              >
                <NotificationsActiveIcon />
              </IconButton>
              <Button
                className={classes.margin}
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon className={classes.extendedIcon} />}
                style={{ color: "white", fontWeight: "500" }}
                disableElevation
              >
                SIGN OUT
              </Button>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                //anchor={theme.direction === "rtl" ? "right" : "left"}
                open={this.state.open_drawer}
                onClose={this.handleDrawerToggle.bind(this)}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/">
              <FindTeachers></FindTeachers>
            </Route>
            <Route exact path="/group">
              <Group></Group>
            </Route>
            <Route exact path="/profile">
              <Profile></Profile>
            </Route>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(withTheme(Dashboard));
