import {NEW_POST} from '../actions/index.js'
import * as readableApi from '../utils/api-tool.js'

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 23; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const newId = makeid()

function newPost(state={}, action){
	switch(action.type){
		case(NEW_POST):
			const post = {
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
				[newId]: post
			}
		default:
			return state
	}

}

export default newPost