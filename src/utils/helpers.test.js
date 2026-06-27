import { test, expect } from "vitest";
import { capitalizeLetter } from "./helpers";

test("capitalizeLetter", () => {
  expect(capitalizeLetter("hello")).toBe("Hello");
  expect(capitalizeLetter("HEL. HELLO")).toBe("Hel. Hello");
  expect(capitalizeLetter("HEL. HELLO LOLO")).toBe("Hel. Hello Lolo");
});
