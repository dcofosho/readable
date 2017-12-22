import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';
import * as readableApi from '../utils/api-tool.js'
import {newPost, editPost, newComment} from '../actions/index.js'
import { Link } from "react-router-dom";

class NewPost extends Component {
	postComment = ()=>{
		console.log("postComment", this.body.value)
		this.props.post({title: this.title.value, body: this.body.value, author:this.author.value, category:this.category.value})
		const newPost = this.props.posts[0]
		readableApi.createPost(newPost, this.props.post);
	}
	render(){
		console.log('NEW POST PROPS', this.props)
		return(
			<div className="App">
				New Post Page
				<br/>
				<input
					className='title-input'
					type='text'
					placeholder='Title'
					ref={(title) => this.title = title}/>
					<br/>
				<input
					className='author-input'
					type='text'
					placeholder='Author'
					ref={(author) => this.author = author}/>
				<br/>
				<input
					className='body-input'
					type='text'
					placeholder='Comment'
					ref={(body) => this.body = body}/>
				<br/>
				<input
					className='category-input'
					type='text'
					placeholder='Category'
					ref={(category) => this.category = category}/>
				<br/>
				<button
					className='icon-btn'
					onClick={this.postComment}>
					Post Comment  
				</button>
			</div>
			)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)