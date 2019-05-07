import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
