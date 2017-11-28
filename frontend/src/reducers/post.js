import {NEW_POST, EDIT_POST} from '../actions/index.js'
import * as readableApi from '../utils/api-tool.js'
import makeid from '../utils/makeId.js'

const newId = makeid()

function posts(state={}, action){
	switch(action.type){
		case(NEW_POST):
			const newPost = {
				id: newId,
				timestamp: Math.floor(Date.now() / 1000),
				title: action.title,
			    body: action.body,
			    author: action.author,
			    category: action.category,
			    voteScore: 0,
			    deleted: false,
			    commentCount: 0
			}
			return{
				...state,
				posts: {...state.posts,
						[newId]: newPost}
			}
		case(EDIT_POST):
			const id = action.id
			const editedPost = {
				id: id,
				timestamp: state.posts.id.timestamp,
				title: state.posts.id.title,
				body: action.body,
				author: state.posts.id.author,
				category: state.posts.id.category,
				voteScore: state.posts.id.voteScore,
				deleted: state.posts.id.deleted,
				commentCount: state.posts.id.commentCount
			}
			return{
				...state,
				posts: {...state.posts,
						[id]: editedPost}
			}
		default:
			return state
	}

}

export default posts