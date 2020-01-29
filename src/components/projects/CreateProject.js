import React, { Component } from "react";
import { createProjects } from '../../store/actions/projectActions'
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom'


class CreateProject extends Component {
  state = {
      title: '',
      content: ''
  };

  handleChange = e => {
    this.setState({
       [e.target.id]: e.target.value
    })
    
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/')
  };

  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to="/signin"/>
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              id="title"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
           <textarea onChange={e => this.handleChange(e)} className="materialize-textarea" id="content" type='text'></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Project</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return{ createProject: (project) => dispatch(createProjects(project))}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)