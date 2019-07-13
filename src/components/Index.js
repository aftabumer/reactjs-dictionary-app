import React, { Component } from "react";
import Header from "./Header";
import CreateDic from "./CreateDic";
import ViewDic from "./ViewDic";
import { BrowserRouter, Route } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Route exact path = '/' component={ViewDic} />
        <Route exact path = '/create-dictionary' component={CreateDic} />

          
        </BrowserRouter>
      </div>
    );
  }
}
export default Index;
