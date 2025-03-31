declare module "react-native-config" {
  export interface NativeConfig {
    API_IAM_HOST_URL: string;
    API_SERVICE_HOST_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
