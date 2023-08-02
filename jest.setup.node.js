import fetch, { Request, Response } from "node-fetch";

global.fetch = fetch;
global.Request = Request;
global.Response = Response;
