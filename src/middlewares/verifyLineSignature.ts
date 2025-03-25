import crypto from "node:crypto";
import { Bindings } from "../types";
import { createMiddleware } from "hono/factory";

export const verifyLineSignature = createMiddleware<{ Bindings: Bindings }>(
  async (c, next) => {
    const signature = c.req.header("x-line-signature");
    if (!signature) {
      console.error("Missing signature header!");
      return c.text("Unauthorized", 401);
    }

    const rawBody = await c.req.raw.clone().bytes();
    const computedSignature = crypto
      .createHmac("SHA256", c.env.LINE_CHANNEL_SECRET)
      .update(rawBody)
      .digest("base64");

    if (signature !== computedSignature) {
      console.error("Signature verification failed!");
      return c.text("Unauthorized", 401);
    }

    return next();
  }
);
