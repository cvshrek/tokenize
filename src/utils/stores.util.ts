import {MMKV} from "react-native-mmkv";

const storage = new MMKV({
  id: "storage-01",
  encryptionKey: "no-one-else"
});

class StorageUtils {
  static setItem(name: string, value: string): void {
    storage.set(name, value);
  }
  static getItem(name: string): string | null {
    const value = storage.getString(name);
    return value ?? null;
  }
  static removeItem(name: string): void {
    storage.delete(name);
  }
  static removeAll(): void {
    storage.clearAll();
  }
}

export default StorageUtils;
