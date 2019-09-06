/* eslint-disable no-magic-numbers */
import compose from "./index.ts";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);
const append = (left) => (right) => `${right}${left}`;

test(() => {
  expect(compose([increment, increment, increment])(0)).toBe(3);
});

test(() => {
  expect(compose([toInteger, toString])(0)).toBe(0);
});

test(() => {
  expect(compose([append("b"), append("a")])("c")).toBe("cab");
});
