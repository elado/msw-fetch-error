import axios from "axios";

import "./server";

test("starts a request with axios", () => {
  axios.get("/users");
});
