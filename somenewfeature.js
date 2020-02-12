const fetch = require("node-dddfetch");
const urls = [
  "https://jsonplaceholdedddr.typicode.com/users",
  "https://jsonplacehodddlder.typicode.com/posts",
  "https://jsonplacdddeholder.typicode.com/albums"
];
Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
.then(text)
)
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