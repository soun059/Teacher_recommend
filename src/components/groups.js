import React from "react";
import {
  Button,
  Card,
  CardContent,
  Avatar,
  Grid,
  Typography,
  CardActions
} from "@material-ui/core";
class Group extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Card elevation={5} style={{ marginBottom: "10px" }}>
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
        <Card elevation={5} style={{ marginBottom: "10px" }}>
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
        <Card elevation={5} style={{ marginBottom: "10px" }}>
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

export default Group;
