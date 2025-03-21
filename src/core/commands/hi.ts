import { ICommand } from "../types";

const cmd: ICommand = {
  name: "hi",
  description: "Say Hi!",
  match: /^hi$/i,
  handler: ({ args }) => `Hello ${args[1] ?? "World"}!`,
};

export default cmd;
