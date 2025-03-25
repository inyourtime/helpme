import { Bindings } from "../types";

export async function sendReply(
  env: Bindings,
  replyToken: string,
  text: string
) {
  try {
    await fetch(`${env.LINE_ENDPOINT}/v2/bot/message/reply`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        replyToken: replyToken,
        messages: [
          {
            type: "text",
            text: text,
          },
        ],
      }),
    });
  } catch (err) {
    console.error(err);
  }
}
