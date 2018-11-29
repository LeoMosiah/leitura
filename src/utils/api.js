import { tranformArrayIntoMap } from "./helper";

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

export const deletePost = id =>
  fetch(`${url}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${url}/comments/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = () =>
  fetch(`${url}/posts`, headers).then(res => res.json());

export const getComments = id =>
  fetch(`${url}/posts/${id}/comments`, headers).then(res => res.json());

export const savePost = post =>
  fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const votePost = (id, option) =>
  fetch(`${url}/posts/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: option })
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

export const saveComment = comment =>
  fetch(`${url}/comments/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const voteComment = (id, option) =>
  fetch(`${url}/comments/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: option })
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
      timestamp: Date.now(),
      body: text
    })
  }).then(res => res.json());

export async function getInitialData() {
  const postsArray = await getPosts();
  const commentsArrayByPost = await Promise.all(
    postsArray.map(async post => await getComments(post.id))
  );
  const commentsArrayFilteredByEmptyComments = commentsArrayByPost.filter(
    comment => comment.length
  );

  const posts = tranformArrayIntoMap(postsArray);

  const comments = tranformArrayIntoMap(commentsArrayFilteredByEmptyComments);

  const categories = tranformArrayIntoMap(await getCategories());

  return { posts, comments, categories };
}
