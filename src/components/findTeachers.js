import React from "react";
import {
  Paper,
  InputBase,
  withStyles,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Avatar,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import useStyles from "../styles/findTeachers_styles";

class FindTeachers extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper component="form" className={classes.root} elevation={10}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Teachers"
            inputProps={{ "aria-label": "search teachers" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <ChevronRightIcon />
          </IconButton>
        </Paper>
        <Grid container className={classes.gridCards}>
          <Grid item xs={12} md={4} className={classes.filters}>
            <Card elevation={10}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Filters
                </Typography>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox value="AI" />}
                      label="AI"
                    />
                    <FormControlLabel
                      control={<Checkbox value="ML" />}
                      label="ML"
                    />
                    <FormControlLabel
                      control={<Checkbox value="Full Stack" />}
                      label="Full Stack"
                    />
                  </FormGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container xs={12} sm={8} md={8} className={classes.names}>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.filters}>
              <Card className={classes.cards} elevation={0}>
                <CardContent>
                  <Avatar>S</Avatar>
                  <Typography variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography color="textSecondary">Scope</Typography>
                  <Typography variant="body2" component="p">
                    We have to write something<br></br> about the teacher here!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(FindTeachers);
