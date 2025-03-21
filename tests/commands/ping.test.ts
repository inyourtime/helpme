import { expect, test } from "bun:test";
import Command from "../../src/core/commands/ping";

const { name, match, handler } = Command;

test("ping command has correct name", () => {
  expect(name).toBe("ping");
});

test("ping command regex matches correctly", () => {
  expect(match instanceof RegExp).toBe(true);

  if (match instanceof RegExp) {
    expect(match.test("ping")).toBe(true);
    expect(match.test("Ping")).toBe(true);
    expect(match.test("PING")).toBe(true);
    expect(match.test("pong")).toBe(false);
    expect(match.test("ping there")).toBe(false);
    expect(match.test("pingme")).toBe(false);
    expect(match.test(" ping")).toBe(false);
  } else {
    throw new Error("pingCommand.match is not a RegExp");
  }
});

test("ping command handler returns correct response", () => {
  expect(handler({ args: [] })).toBe("pong");
});
