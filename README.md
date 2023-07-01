<h1>MSpo IoC Container</h1>

**mspo-ioc-container** implements a simple inversion of control container in TypeScript. It is authored by Max Sporer ([github](https://github.com/maxsporer)).

## Installation

Available as an [npm package](https://www.npmjs.com/package/mspo-ioc-container).

```sh
npm install mspo-ioc-container
```
## Functions

### bind()
Function that accepts a `key` of type `string` and `dependency` of type `any`. Binds the dependency to the key. Overwrites key-dependency pair if passed key already exists.

### resolve()

Parameter decorator factory that allows for interface and other non-class
information to be stored in the constructor's metadata.

#### Usage

```typescript
import { IoCContainer } from "mspo-ioc-container";

class A {
  num: number;
  constructor(num: number) {
    this.num = num;
  }
}

const container = new IoCContainer();
container.bind('a', new A(5));
const exampleA = container.resolve<A>('a');
console.log(exampleA) // A { num: 5 }
```

## Issues/Questions

Please submit issues and ask questions on the issues page [issues](https://github.com/maxsporer/mspo-ioc-container/issues).

## Changelog

The [changelog](https://github.com/maxsporer/mspo-ioc-container/releases) is regularly updated to reflect what's changed in each new release.

## License

This project is licensed under the terms of the
[ISC license](/LICENSE).

