
import _ from "lodash";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  headers: {
    Accept: "application/json",
    Authorization: token
  }
};

export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = () =>
  fetch(`${url}/posts`, headers).then(res => res.json());

export const getPostByCategory = category =>
  fetch(`${url}/${category}/posts`, headers).then(res => res.json());

export const getPostById = id =>
  fetch(`${url}/posts/${id}`, headers).then(res => res.json());

export const getComments = id =>
  fetch(`${url}/posts/${id}/comments`, headers).then(res => res.json());

export const getComment = id =>
  fetch(`${url}/comments/${id}`, headers).then(res => res.json());

export const addPost = post =>
  fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const votePost = id =>
  fetch(`${url}/posts/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "upVote" })
  }).then(res => res.json());

export const changePost = (id, text) =>
  fetch(`${url}/posts/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(text)
  }).then(res => res.json());

export const addComment = comment =>
  fetch(`${url}/comments/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const voteComment = id =>
  fetch(`${url}/comments/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "upVote" })
  }).then(res => res.json());

export const changeComment = (id, text) =>
  fetch(`${url}/comments/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      timestamp: _.now(),
      body: text
    })
  }).then(res => res.json());

export const generateUID = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export function getInitialData() {
  return Promise.all([getPosts()]).then(([posts]) => ({
    posts
  }));
}
