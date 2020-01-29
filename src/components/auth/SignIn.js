import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to="/"/>
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              onChange={e => this.handleChange(e)}
              type="email"
              id="email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              onChange={e => this.handleChange(e)}
              type="password"
              id="password"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
