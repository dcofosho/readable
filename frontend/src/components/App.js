import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';
import * as readableApi from '../utils/api-tool.js'
import {newPost} from '../actions/index.js'

class App extends Component {
  
  render() {
    console.log('Props',this.props)
    return (
      <div className="App">
        {this.props.post}
      </div>
    );
  }
}

function mapStateToProps({posts}){
  return{
    posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    post: (data)=>dispatch(newPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)