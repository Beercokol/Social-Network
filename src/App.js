import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/Content/ContentContainer";
import Message from "./components/Message/Message";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Route path="/profile/:userId?" render={() => <ContentContainer />} />
        <Route exact path="/message" render={() => <Message />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
