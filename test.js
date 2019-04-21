/* eslint-disable no-magic-numbers */
import {test} from "tap";

import compose from "./index";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);

test(({same, end}) => {
  same(
    compose([increment, increment, increment])(0),
    3
  );

  end();
});

test(({same, end}) => {
  same(
    compose([toInteger, toString])(0),
    0
  );

  end();
});
