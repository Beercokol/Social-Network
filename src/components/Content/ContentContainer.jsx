import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostActionCreator,
  setProfilePageActionCreator,
} from "./../../redux/action-creators";
import {getProfile} from '../../API/api'
import { withRouter } from "react-router-dom";
class ContentContainer extends React.Component {
 componentDidMount(){
   debugger;
  let userId = this.props.match.params.userId
  if(!userId){
    userId=8247;
  }
 getProfile(userId)
  .then(data=>{
    this.props.setProfilePage(data)})
 }
  render() {
    return (
      <Content
        postData={this.props.postData}
        newPostText={this.props.newPostText}
        onPostChange={this.props.onPostChange}
        addPost={this.props.addPost}
        profile={this.props.profile}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postData: state.profilePage.postData,
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (e) => {
      let body = e.target.value;
      dispatch(updatePostActionCreator(body));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    setProfilePage:(page)=>{
     dispatch(setProfilePageActionCreator(page))
    }
  };
};
 withRouter(ContentContainer) 

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(ContentContainer) 
);
