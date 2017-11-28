import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';
import * as readableApi from '../utils/api-tool.js'
import {newPost, editPost, newComment} from '../actions/index.js'

class App extends Component {
  
  render() {
    console.log('Props',this.props)
    const id1 = Object.keys(this.props.posts.posts)[0]
    console.log("ID1", id1)
    console.log("Post", this.props.posts.posts[id1])
    const post = this.props.posts.posts[id1]
    return (
      <div className="App">
        {post.body}
      </div>
    );
  }
}

function mapStateToProps({posts, comments}){
  return{
    posts,
    comments
  }
}

function mapDispatchToProps(dispatch){
  return{
    post: (data)=>dispatch(newPost(data)),
    editPost: (data)=>dispatch(editPost(data)),
    comment: (data)=>dispatch(newComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)