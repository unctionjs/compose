# @unction/compose

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> => B => C

Takes a list of functions and runs a value through that stack from right to left.

``` javascript
compose([toInteger, toString])(0) // 0
compose([append("b"), append("a")])("c") // "cab"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/compose.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/compose.svg?maxAge=2592000&style=flat-square
