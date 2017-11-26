import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as readableApi from './utils/api-tool.js'

class App extends Component {
  state = {
    screen: 'list',
    posts: []
  }
  componentDidMount(){
    console.log(readableApi.getAllPosts())
    readableApi.getAllPosts().then((posts)=>{
      this.setState({ posts })
    })
  }
  render() {
    console.log('Posts',this.state.posts)
    return (
      <div className="App">
        <ul key="posts">
          {this.state.posts.map((post)=>{
            return <li key={post.id}>{post.body}</li>
          }
          )}
        </ul>
      </div>
    );
  }
}

export default App;
