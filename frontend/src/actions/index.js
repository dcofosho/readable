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