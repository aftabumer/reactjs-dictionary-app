import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { withRouter } from 'react-router-dom';


const styles = theme => ({
  heading: {
    padding: "10px",
    margin: "20px"
  },
  fields: {
    padding: "10px",
    margin: "20px",
    borderTop: "2px solid blue"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "40%"
  },
  margin: {
    margin: "20px",
    marginLeft: "50px"
  },
  button: {
    margin: theme.spacing(1),
    padding: "5px 380px 5px 375px"
  }
});

class CreateDic extends Component {

  goto = path => {
    this.props.history.push(path);
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.heading}>
          <Typography variant="h6" component="h3">
            Create List
          </Typography>
        </Paper>
        <Paper className={classes.fields}>
          <Typography variant="h6" component="h3">
            <TextField
              id="outlined-name"
              label="Write Domin here"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Write Range here"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <Fab
              size="medium"
              color="default"
              aria-label="Delete"
              className={classes.margin}
            >
              <DeleteIcon />
            </Fab>
          </Typography>
          <Typography>
            <Button
              variant="contained"
              color="defult"
              className={classes.button}
            >
              Create List
            </Button>
            <Fab
              size="medium"
              color="default"
              aria-label="Add"
              className={classes.margin}
            >
              <AddIcon />
            </Fab>
          </Typography>
        </Paper>
      </div>
    );
  }
}
export default (withRouter(withStyles(styles)(CreateDic)));