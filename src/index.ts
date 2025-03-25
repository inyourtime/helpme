import { Hono } from "hono";
import lineWebhook from "./routes/lineWebhook";
import commander from "./routes/commander";

const app = new Hono();

app.route("/line_webhook", lineWebhook);
app.route("/commands", commander);

export default app;
