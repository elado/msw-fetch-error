import "./server";

test(`starts a request with ${process.env.TEST}-fetch`, () => {
  fetch("http://localhost/users");
});
