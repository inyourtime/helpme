import { Hono } from "hono";
import { Bindings } from "../types";
import { findMyWay } from "../core";
import { sendReply } from "../utils/lineReply";
import { verifyLineSignature } from "../middlewares/verifyLineSignature";

const app = new Hono<{ Bindings: Bindings }>();

app.post("/", verifyLineSignature, async (c) => {
  const json = await c.req.json();

  for (const event of json.events) {
    const text = event.message.text;

    switch (event.type) {
      case "message":
        if (typeof text !== "string") {
          break;
        }
        const args = text.split(" ");
        const cmd = findMyWay(args[0]);

        if (!cmd) {
          await sendReply(c.env, event.replyToken, "Unknown command");
          break;
        }
        const res = await cmd.handler({ args });

        await sendReply(c.env, event.replyToken, res);
        break;
    }
  }

  return c.text("OK");
});

export default app;
