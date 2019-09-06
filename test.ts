/* eslint-disable no-magic-numbers */
import compose from "./index";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);
const append = (left) => (right) => `${right}${left}`;

test("works", () => {
  expect(compose([increment, increment, increment])(0)).toBe(3);
});

test("works", () => {
  expect(compose([toInteger, toString])(0)).toBe(0);
});

test("works", () => {
  expect(compose([append("b"), append("a")])("c")).toBe("cab");
});
