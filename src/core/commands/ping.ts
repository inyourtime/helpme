import { ICommand } from "../types";

const cmd: ICommand = {
  name: "ping",
  description: "ping pong",
  match: /^ping$/i,
  handler: () => "pong",
};

export default cmd;
