/* eslint-disable no-magic-numbers */
import {test} from "tap";

import compose from "./index";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);
const append = (left) => (right) => `${right}${left}`;

test(({equal, end}) => {
  equal(
    compose([increment, increment, increment])(0),
    3
  );

  end();
});

test(({equal, end}) => {
  equal(
    compose([toInteger, toString])(0),
    0
  );

  end();
});

test(({equal, end}) => {
  equal(
    compose([append("b"), append("a")])("c"),
    "cab"
  );

  end();
});
