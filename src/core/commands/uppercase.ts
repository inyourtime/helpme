import { ICommand } from "../types";

const cmd: ICommand = {
  name: "uppercase",
  description: "Uppercase the message",
  match: /^up(?:per)?$/i,
  handler: ({ args }) => {
    const message = args[1];
    if (!message) {
      return "Please provide a message ‼️";
    }

    return message.toUpperCase();
  },
};

export default cmd;
