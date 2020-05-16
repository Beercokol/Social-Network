import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Message from "./components/Message/Message";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route
          path="/profile"
          render={() => (
            <Content
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />

        <Route
          exact
          path="/message"
          render={() => (
            <Message
              messagePage={props.state.messagePage}
             dispatch={props.dispatch}
             
          
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
