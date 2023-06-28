export class IoCContainer {
  private dependencies: { [key: string]: any } = {};

  bind(key:string, dependency: any): void {
    if (key in this.dependencies) {
      console.log('Key already bound. Overwriting');
    }
    this.dependencies[key] = dependency;
  }

  resolve<T>(key: string): T {
    if (!(key in this.dependencies)) {
      throw new Error(`Depndencey '${key}' not registered.`);
    }
    return this.dependencies[key];
  }
}
