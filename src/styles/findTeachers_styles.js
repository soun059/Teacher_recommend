const useStyles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: "20px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  gridCards: {
    marginTop: "5%"
  },
  cards: {
    maxWidth: "900px"
    //minWidth: "20px"
  },
  names: {
    padding: "5px"
  },
  filters: {
    padding: "5px"
  }
});

export default useStyles;
