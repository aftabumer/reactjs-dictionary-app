import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Extra from "./Extra";
import { withRouter } from 'react-router-dom';



const styles = themes => ({
  root: {
    flexGrow: 1
  },
  text: {
    textAlign: "right"
  }
});

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Create Dictionary"
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                float: "center",
                width: "100%"
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "left",
                  float: "center"
                }}
              >
                <Typography variant="h6" color="inherit">
                  Manage Dictionaries
                </Typography>
              </div>
              <div>
                <Extra />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default (withRouter(withStyles(styles)(Index)));
