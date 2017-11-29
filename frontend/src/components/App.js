import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';
import * as readableApi from '../utils/api-tool.js'
import {newPost, editPost, newComment} from '../actions/index.js'
import { Link } from "react-router-dom";

class App extends Component {
  
  render() {
    console.log('Props',this.props)
    
    //console.log("Post", this.props.posts.posts[id1])
    return (
      <div className="App">
      <ul className="Posts">
      <Link to="/newPost">New Post</Link>
        {
          this.props.posts.map((post)=>
            <li className="Post">{post.body}</li>
          )
        }
      </ul>
      </div>
    );
  }
}

function mapStateToProps({posts, comments}){
  const keys = Object.keys(posts.posts)
  console.log("KEYS", keys)
  //console.log("Post", this.props.posts.posts[id1])
  const postObj = posts.posts
  console.log("POSTS", posts)
  let post_array = keys.map((key)=>postObj[key])
  return{
    posts: post_array,
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