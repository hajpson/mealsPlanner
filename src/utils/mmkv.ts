import { MMKV } from "react-native-mmkv";

export class MMKVStorage {
  private mmkvInstance: MMKV;

  public getInstance() {
    if (!this.mmkvInstance) {
      throw new Error("MMKV instance was not initialized");
    }

    return this.mmkvInstance;
  }

  public createInstance(force?: boolean) {
    if (!this.mmkvInstance && !force) {
      return this.mmkvInstance;
    }

    this.mmkvInstance = new MMKV();
    return this.mmkvInstance;
  }
}
