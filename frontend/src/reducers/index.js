import posts from './post.js'
import comments from './comment.js'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  comments
});