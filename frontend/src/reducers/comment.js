import {NEW_COMMENT} from '../actions/index.js'
import * as readableApi from '../utils/api-tool.js'
import makeid from '../utils/makeId.js'

const newId = makeid()

function comments(state={}, action){
	switch(action.type){
		case(NEW_COMMENT):
			const comment = {
				id: newId,
				parentId: action.parentId,
				timestamp: Math.floor(Date.now() / 1000),
			    body: action.body,
			    author: action.author,
			    voteScore: 0,
			    deleted: false,
			    parentDeleted: false
			}
			return{
				...state,
				posts: {
					...state.posts,
					[action.parentId]: 
					{
						...state.posts.action.parentId,
						commentCount: state.posts.action.parentId.commentCount += 1
					}},
				comments: {
					...state.comments,
					[comment.id]:comment
				}
			}
		default:
			return state
	}

}

export default comments