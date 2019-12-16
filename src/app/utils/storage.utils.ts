export class StorageManager {
    constructor() { }
    save(key: string, value: any) {
        window.localStorage.setItem(key, value);
    }
    get(key: string): any {
        return window.localStorage.getItem(key);
    }
    delete(key: string) {
        window.localStorage.removeItem(key);
    }
}