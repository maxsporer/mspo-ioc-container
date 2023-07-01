export { IoCContainer } from './container';

import { IoCContainer } from "./container";

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
