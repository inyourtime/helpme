import { expect, test } from "bun:test";
import Command from "../../src/core/commands/hi";

const { name, match, handler } = Command;

test("hi command has correct name", () => {
  expect(name).toBe("hi");
});

test("hi command regex matches correctly", () => {
  expect(match instanceof RegExp).toBe(true);

  if (match instanceof RegExp) {
    expect(match.test("hi")).toBe(true);
    expect(match.test("Hi")).toBe(true);
    expect(match.test("HI")).toBe(true);
    expect(match.test("hello")).toBe(false);
    expect(match.test("hi there")).toBe(false);
    expect(match.test("hime")).toBe(false);
    expect(match.test(" hi")).toBe(false);
  } else {
    throw new Error("hiCommand.match is not a RegExp");
  }
});

test("hi command handler returns correct response", () => {
  expect(handler({ args: [] })).toBe("Hello World!");
  expect(handler({ args: ["hi", "test"] })).toBe("Hello test!");
});
