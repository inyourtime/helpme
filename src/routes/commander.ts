import { Hono } from "hono";
import { commands } from "../core";

const app = new Hono();

app.get("/", async (c) => {
  return c.json({
    commands: commands.map((c) => ({
      name: c.name,
      description: c.description ?? "",
    })),
  });
});

export default app;
