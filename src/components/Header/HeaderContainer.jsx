import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserActionCreator } from "../../redux/action-creators";
import {getAuthMe} from "../../API/api"
class HeaderContainer extends React.Component {
  componentDidMount() {
   getAuthMe()
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.setAuthUser(res.data.data.id, res.data.data.login, res.data.data.email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setAuthUser: (data) => {
      dispatch(setAuthUserActionCreator(data));
    },
  };
};
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(HeaderContainer);
