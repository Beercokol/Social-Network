import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Message from "./components/Message/Message";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/profile" render={() => <Content />} />
        <Route exact path="/message" render={() => <Message />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
