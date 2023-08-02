import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("RESPONSE"));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
