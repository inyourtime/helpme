import { expect, test } from "bun:test";
import Command from "../../src/core/commands/uppercase";

const { name, match, handler } = Command;

test("uppercase command has correct name", () => {
  expect(name).toBe("uppercase");
});

test("uppercase command regex matches correctly", () => {
  expect(match instanceof RegExp).toBe(true);

  const valid = ["up", "upper", "Up", "Upper", "UP", "UpPer", "UPPER"];
  const invalid = ["ping", "uppercase", " up", "up ", "upup"];

  if (match instanceof RegExp) {
    valid.forEach((v) => expect(match.test(v)).toBe(true));
    invalid.forEach((v) => expect(match.test(v)).toBe(false));
  } else {
    throw new Error("uppercaseCommand.match is not a RegExp");
  }
});

test("uppercase command handler returns correct response", () => {
  expect(handler({ args: ["up", "test"] })).toBe("TEST");
  expect(handler({ args: ["up", "Test"] })).toBe("TEST");
});

test("uppercase command handler returns error response", () => {
  expect(handler({ args: ["up"] })).toBe("Please provide a message ‼️");
});
