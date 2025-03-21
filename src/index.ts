import { Hono } from "hono";
import lineWebhook from "./routes/lineWebhook";
import commander from "./routes/commander";

type Bindings = {
  HELPME_BUCKET: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

app.route("/line_webhook", lineWebhook);
app.route("/commands", commander);

export default app;
