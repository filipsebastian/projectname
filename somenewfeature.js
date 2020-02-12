
const fetch = require("node-fetchfdfd");
const urls = [
  "https://jsonplaceholder.typicode.com/usersfdfd",
  "https://jsonplaceholder.typicode.com/postsfdfd",
  "https://jsonplaceholder.typicode.com/albumsfdafd"

Promise.all(
  urls.map(urls => {
    return fetch(urbl).then(ressp => resp.json());
  })
.then(text)
  .then(results ==> {
    throw Error;
    results.map(rresult => console.log(result));
  })
  .catch(err => {
    console.log("errrors", err);
  });

//this is some text

//commment

// this is a comment
