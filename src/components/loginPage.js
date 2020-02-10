import React, { Component } from "react";
import "../styles/loginPage.css";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Link,
  OutlinedInput,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle
} from "@material-ui/core";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: true,
      forgot: false,
      signup: false
    };
  }
  handleColorChange() {
    this.setState({
      dark: !this.state.dark
    });
  }

  handleForgotClose() {
    this.setState({
      forgot: !this.state.forgot
    });
  }

  handleSignUpClose() {
    this.setState({
      signup: !this.state.signup
    });
  }

  render() {
    return (
      <div
        className="Login-body"
        style={{ background: this.state.dark ? "#131419" : "white" }}
      >
        <Grid container className="Grid-body">
          <Grid item container xs={12} sm={6} lg={6} className="headers">
            <Grid item xs={12}>
              <div className="switch">
                Dark Mode
                <Switch
                  color="inherit"
                  checked={this.state.dark}
                  onChange={this.handleColorChange.bind(this)}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
            </Grid>
            <Grid item xs="12">
              <h1
                className="Login-header"
                style={{
                  color: this.state.dark ? "white" : "#868686"
                }}
              >
                Welcome to Teacher-Search Engine
              </h1>
            </Grid>
            <Grid item xs="12">
              <div className="Login-sub-header">
                Find your best tutor for your projects today
              </div>
            </Grid>
          </Grid>
          <Grid item xs="12" sm="6" lg="6" className="card-login">
            <Card
              className="card-box"
              raised={true}
              elevation={3}
              style={{
                background: this.state.dark ? "#131419" : "white"
              }}
            >
              <CardHeader title="Login" className="card-text"></CardHeader>
              <CardContent>
                <Typography className="card-text">
                  Enter Your College ID and password to continue
                </Typography>
              </CardContent>
              <CardContent>
                <OutlinedInput
                  id="standard-adornment-amount"
                  //onChange={handleChange('amount')}
                  fullWidth
                  type="email"
                  placeholder="Email"
                  style={{
                    color: "#868686",
                    borderRadius: "50px"
                  }}
                  className="inputEmail"
                  color="secondary"
                />
                <OutlinedInput
                  id="standard-adornment-amount"
                  //onChange={handleChange('amount')}
                  fullWidth
                  type="password"
                  placeholder="Password"
                  style={{ color: "#868686", borderRadius: "50px" }}
                />
              </CardContent>
              <div style={{ marginLeft: "20px" }}>
                <Link
                  className="card-links"
                  onClick={this.handleForgotClose.bind(this)}
                >
                  Forgot Password?{" "}
                </Link>{" "}
              </div>
              <CardContent className="button-pos" className="card-text-button">
                <Button variant="outlined" color="inherit">
                  Submit
                </Button>
              </CardContent>
              <CardContent className="card-text">
                Not a member yet?{" "}
                <Link
                  className="card-links"
                  onClick={this.handleSignUpClose.bind(this)}
                >
                  Sign Up
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {this.state.forgot ? (
          <Dialog
            open={this.state.forgot}
            onClose={this.handleForgotClose.bind(this)}
            aria-labelledby="form-dialog-title"
            fullWidth={345}
            PaperProps={{
              style: {
                backgroundColor: this.state.dark ? "#131419" : "white",
                borderRadius: "20px"
              }
            }}
          >
            <DialogTitle className="card-text">Forgot Password?</DialogTitle>
            <DialogContent>
              <DialogContentText style={{ color: "#868686" }}>
                Enter the registered mail id
              </DialogContentText>
              <OutlinedInput
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email"
                style={{ color: "#868686", borderRadius: "50px" }}
                color="inherit"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleForgotClose.bind(this)}
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleForgotClose.bind(this)}
                color="primary"
              >
                Next
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
        {this.state.signup ? (
          <Dialog
            open={this.state.signup}
            onClose={this.handleSignUpClose.bind(this)}
            aria-labelledby="form-dialog-title"
            fullWidth={345}
            PaperProps={{
              style: {
                backgroundColor: this.state.dark ? "#131419" : "white",
                borderRadius: "20px"
              }
            }}
          >
            <DialogTitle className="card-text">New User?</DialogTitle>
            <DialogContent>
              <DialogContentText style={{ color: "#868686" }}>
                Enter Details of the College ID and Password to register
              </DialogContentText>
              <OutlinedInput
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                placeholder="Name"
                style={{
                  color: "#868686",
                  borderRadius: "50px",
                  marginBottom: "10px"
                }}
                color="inherit"
                fullWidth
              />
              <OutlinedInput
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email"
                style={{
                  color: "#868686",
                  borderRadius: "50px",
                  marginBottom: "10px"
                }}
                color="inherit"
                fullWidth
              />
              <OutlinedInput
                margin="dense"
                id="name"
                label="Password"
                type="password"
                placeholder="Password"
                style={{ color: "#868686", borderRadius: "50px" }}
                color="inherit"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleSignUpClose.bind(this)}
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleSignUpClose.bind(this)}
                color="primary"
              >
                Next
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </div>
    );
  }
}

export default LoginPage;
