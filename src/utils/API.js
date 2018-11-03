
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers: { Authorization: headers } })
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = () =>
  fetch(`${api}/posts`, { headers: { Authorization: headers } }).then(res =>
    res.json()
  );

export const getPostByCategory = category =>
  fetch(`${api}/:redux/posts`, {
    headers: { Authorization: headers }
  }).then(res => res.json());

export const updateComment = (id, text) =>
  fetch(`${api}/comments/:${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: text
  }).then(res => res.json());
