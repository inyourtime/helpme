import crypto from "node:crypto";
import { Context, Next } from "hono";
import { Bindings } from "../types";

export async function verifyLineSignature(
  c: Context<{ Bindings: Bindings }>,
  next: Next
) {
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
