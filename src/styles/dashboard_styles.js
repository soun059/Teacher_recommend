import { findByPlaceholderText } from "@testing-library/react";

const drawerWidth = 240;
const useStyles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    float: "right"
  },
  margin: {
    margin: theme.spacing(1),
    color: "white"
  },
  title: {
    flexGrow: 1
  }
});

export default useStyles;
