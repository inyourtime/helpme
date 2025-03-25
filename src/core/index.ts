// Now in Cloudflare worker doesn't support FileSystem yet
// We do it manually here

import PingCommand from "./commands/ping";
import HiCommand from "./commands/hi";
import UppercaseCommand from "./commands/uppercase";

const commands = [PingCommand, HiCommand, UppercaseCommand].filter(
  (c) => c.hide !== true
);

function printCommands() {
  return `Commands: ${commands.map((c) => c.name).join(", ")}`;
}

function findMyWay(command: string) {
  return commands.find((c) => {
    if (typeof c.match === "string") {
      return c.match === command;
    }

    return c.match.test(command);
  });
}

export { commands, printCommands, findMyWay };
