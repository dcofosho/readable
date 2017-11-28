import posts from './newPost.js'
import comments from './newComment.js'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  comments
});