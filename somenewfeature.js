const fetch = require("node-fetchfdfd");
const urls = [
  "https://jsonplaceholder.typicode.com/usersfdfd",
  "https://jsonplaceholder.typicode.com/postsfdfd",
  "https://jsonplaceholder.typicode.com/albumsfdafd"
];
Promise.all(
  urls.map(urls=> {
    return fetch(urbl).then(ressp => resp.json());
  })
)
  .then(resultss => {
    throw Errors;
    resultss.map(result => console.log(result));
  })
  .catch(errss => {
    console.log("errorss", aerr);
  });