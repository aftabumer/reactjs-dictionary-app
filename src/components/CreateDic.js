import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addData, deleteData, editData, saveData } from "../actions";

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
    padding: "5px 490px 5px 485px"
  }
});

class CreateDic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: "",
      range: "",
      dics: [
        {
          domain: "iphone XMax",
          range: "1250000"
        }
      ],
      e_domain: "",
      e_range: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addData = () => {
    console.log("addData", this.state);
    this.props.addData(this.state.domain, this.state.range);

    this.goto("/");
  };

  // handleOnClick =() =>{
  //   let dics = this.state.dics;
  //   let domain = this.state.domain;
  //   let range = this.state.range;

  //   let newDic = {
  //     dics,
  //     domain,
  //     range,
  //     editStatus: false
  //   }

  //   dics.push(newDic)

  //   this.setState({
  //     domain:'',
  //     range: ''
  //   })
  // }
  
  // handleOnDelete = index => {
  //   let dic = this.state.dics;
  //   dic.splice(index, 1);
  //   this.setState({
  //     dics: dic
  //   });
  // };

  // handelOnEdit = index => {
  //   let dics = this.state.dics.map((dic, i) =>
  //     i === index ? { ...dic, editStatus: true } : dic
  //   );
  //   this.setState({ dics });
  // };

  // handleOnSave = index => {
  //   let dics = this.state.dics.map((dic, i) =>
  //     i === index
  //       ? {
  //           dic,
  //           editStatus: false,
  //           domain: this.state.e_domain,
  //           range: this.state.e_range
  //         }
  //       : dic
  //   );
  //   this.setState({ dics });
  // };

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
              name="domain"
              value={this.state.domain}
              onChange={this.handleOnChange}
            />
            <TextField
              id="outlined-name"
              label="Write Range here"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              name="range"
              value={this.state.range}
              onChange={this.handleOnChange}
            />
            <Fab
              size="medium"
              color="default"
              aria-label="Add"
              className={classes.margin}
            >
              <AddIcon />
            </Fab>
          </Typography>
          <Typography>
            <Button
              variant="contained"
              color="defult"
              className={classes.button}
              onClick={this.addData}
            >
              Create List
            </Button>
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addData: (domain, range) => dispatch(addData(domain, range))
  };
};

const mapStateToProps = state => {
  return {
    datas: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(CreateDic)));
