import React, { Component } from "react";
import "./Styles.css";
import Box from "@material-ui/core/Box";
import { withRouter } from 'react-router-dom';


 class Extra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Create Dictionary",
      headingText: "Create Dictionary",
      isList: false
    };
  }

  handleOnChange = () => {
    if(this.state.isList){
      this.setState({
        buttonText: "Create Dictionary",
      headingText: "Create Dictionary",
      isList: false
      })
    this.goto("/");
    }
    else{
      this.setState({
        buttonText: "View Dictionary",
      headingText: "View Dictionary",
      isList: true
      })
      this.goto("/create-dictionary");
    }
  };

  goto = path => {
    this.props.history.push(path);
  };


  render() {
    return (
      <div style={{ cursor: "pointer", marginRight: '100px'}}>
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
            <Box className="arrow_box" onClick={this.handleOnChange}>
              {this.state.buttonText}
            </Box>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "left",
              float: "center"
            }}
          >
            {this.state.isList ? <i className="material-icons">list</i> : <i className="material-icons">playlist_add</i>}
          </div>
        </div>
        
      </div>
    );
  }
}
export default (withRouter(Extra))
