import { assertEquals } from "jsr:@std/assert";
import { toNumberBetweenZeroAndOne } from "./strings.ts";

Deno.test("should parse number an empty string", () => {
  const input =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const expected = 88;
  const result = toNumberBetweenZeroAndOne(input);
  assertEquals(result, expected);
});

Deno.test("should parse number 'Hello, World'", () => {
  const input =
    "03675ac53ff9cd1535ccc7dfcdfa2c458c5218371f418dc136f2d19ac1fbe8a5";
  const expected = 1;

  const result = toNumberBetweenZeroAndOne(input);
  assertEquals(result, expected);
});

Deno.test("should parse number 'test'", () => {
  const input =
    "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08";
  const expected = 62;
  const result = toNumberBetweenZeroAndOne(input);
  assertEquals(result, expected);
});
