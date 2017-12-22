import * as actions from '../actions/index.js'
const api = 'http://localhost:3001'
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const remove = (post) =>
  fetch(`${api}/posts/${post.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data)

export const createPost = (post, postFunction) => {
    fetch("http://localhost:3001/posts/",
    {method: "POST", body: JSON.stringify(post), headers})
    .then((resp) => {
      resp.json().then((data) => {
        // console.log(data, this);
        var obj = {
          id: data.id,
          timestamp: data.timestamp,
          title: data.title,
          body: data.body,
          author: data.author,
          category: data.category,
          deleted: data.deleted,
          voteScore: data.voteScore
        }
        postFunction(obj);
        window.location.href = "/";
      })
    })
}