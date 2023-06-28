import { IoCContainer } from '../src/container';

describe ('IoCContainer', () => {
  let container: IoCContainer;

  beforeEach(() => {
    container = new IoCContainer();
  });

  it('should bind and resolve a dependency', () => {
    const key = 'testClass';
    class TestClass {
      val: number;
      constructor (val: number) {
        this.val = val;
      }
    }

    const testClass = new TestClass(5);
    container.bind('testClass', testClass);

    const resolvedDependency = container.resolve<TestClass>(key);
    expect(resolvedDependency).toBe(testClass);
  });

  it('should overwrite a bound dependency if the same key is used', () => {
    const key = 'testClass';
    class TestClassA {
      val: number;
      constructor(val: number) {
        this.val = val;
      }
    }

    class TestClassB {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }

    const testClassA = new TestClassA(5);
    const testClassB = new TestClassB('test');
    container.bind(key, testClassA);
    container.bind(key, testClassB);

    const resolvedDependency = container.resolve(key);
    expect(resolvedDependency).toBe(testClassB);
  });

  it('should throw an error if trying to resolve an unregistered dependency', () => {
    const key = 'unboundClass';

    expect(() => container.resolve(key)).toThrow(new Error(`Depndencey '${key}' not registered.`));
  });
})