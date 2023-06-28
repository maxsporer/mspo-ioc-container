export declare class IoCContainer {
    private dependencies;
    bind(key: string, dependency: any): void;
    resolve<T>(key: string): T;
}
