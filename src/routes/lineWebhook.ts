import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  return c.json("xxxxxx");
});

export default app;
