const fetch = require("node-fetch");
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];
Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
)
  .then(results => {
    throw Error;
    results.map(result => console.log(result));
  })
  .catch(err => {
    console.log("errors", err);
  });