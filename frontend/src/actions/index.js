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

export const NEW_COMMENT = 'NEW COMMENT'

export function newComment({parentId, body, author}){
	return{
		type: NEW_COMMENT,
		parentId,
		body,
		author,
	}
}