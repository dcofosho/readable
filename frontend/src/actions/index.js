export const NEW_POST = 'NEW_POST'

export function newPost({title, body, author, category}){
	return{
		type: NEW_POST,
		title,
		body,
		author,
		category,
	}
}

export const EDIT_POST = 'EDIT_POST'

export function editPost({id, body}){
	return{
		type: EDIT_POST,
		id,
		body,
	}
}

export const NEW_COMMENT = 'NEW COMMENT'

export function newComment({parentId, body, author}){
	return{
		type: NEW_COMMENT,
		parentId,
		body,
		author,
	}
}