import React from "react";
import wall from "../images/wall.jpg";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import "../styles/profile.css";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={wall} className="img-wall"></img>
        <Grid container>
          <Grid item xs={4}>
            <Avatar className="img-avatar">S</Avatar>
          </Grid>
          <Grid item container xs={8}>
            <Grid item xs={12}>
              <Typography color="textSecondary">Designation</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: 25, marginTop: "-10px" }}>
                Name
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Card elevation={5} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography color="textSecondary">Scope</Typography>
            <Typography variant="body2" component="p">
              We have to write something about the topic here!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card elevation={5} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography color="textSecondary">Scope</Typography>
            <Typography variant="body2" component="p">
              We have to write something about the topic here!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card elevation={5} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography color="textSecondary">Scope</Typography>
            <Typography variant="body2" component="p">
              We have to write something about the topic here!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card elevation={5} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography color="textSecondary">Scope</Typography>
            <Typography variant="body2" component="p">
              We have to write something about the topic here!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Profile;
