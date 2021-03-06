import React from "react";
import MyFriends from "./MyFriends/MyFriends";
import MyDialogs from "./MyDialogs/MyDialogs";
import "./Message.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/action-creators";

const Message = (props) => {
  return (
    <BrowserRouter>
      <div className="message">
        <MyFriends friendData={props.friendData} />
        <Route
          path="/message/1"
          render={() => (
            <MyDialogs
              onMessageChange={props.onMessageChange}
              addMessage={props.addMessage}
              messageData={props.messageData}
              newMessageText={props.newMessageText}
            />
          )}
        />
        <Route
          path="/message/2"
          render={() => (
            <MyDialogs
              onMessageChange={props.onMessageChange}
              addMessage={props.addMessage}
              messageData={props.messageData}
              newMessageText={props.newMessageText}
            />
          )}
        />
        <Route
          path="/message/3"
          render={() => (
            <MyDialogs
              onMessageChange={props.onMessageChange}
              addMessage={props.addMessage}
              messageData={props.messageData}
              newMessageText={props.newMessageText}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};
let mapStateToProps = (state) => {
  return {
    messageData: state.messagePage.messageData,
    friendData: state.messagePage.friendData,
    newMessageText: state.messagePage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    onMessageChange: (e) => {
      let body = e.target.value;
      dispatch(updateMessageActionCreator(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
