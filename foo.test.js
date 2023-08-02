import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("http://localhost/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("RESPONSE"));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("should return a list of users", () => {
  fetch("http://localhost/users");
});
