import {MMKV} from "react-native-mmkv";
import * as Keychain from "react-native-keychain";

const storage = new MMKV({
  id: "storage-tk",
  encryptionKey: "no-one-know"
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
  static async setSensitiveItem(key: string, value: string): Promise<void> {
    console.log(key, value);
    await Keychain.setGenericPassword(value, key, {service: key}).then(value =>
      console.log(value)
    );
  }
  static async getSensitiveItem(key: string): Promise<string> {
    try {
      const credentials = await Keychain.getGenericPassword({service: key});
      if (credentials) {
        return credentials.username;
      } else {
        console.log("No credentials stored");
        return "";
      }
    } catch (error) {
      console.error("Failed to access Keychain", error);
      return "";
    }
  }
  static async resetSensitiveItem(key: string): Promise<void> {
    await Keychain.resetGenericPassword({service: key});
  }
}

export default StorageUtils;
