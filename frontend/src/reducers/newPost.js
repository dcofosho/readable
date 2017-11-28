import {NEW_POST} from '../actions/index.js'
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
		default:
			return state
	}

}

export default posts