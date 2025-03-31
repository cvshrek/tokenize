import axios, {AxiosError, InternalAxiosRequestConfig} from "axios";
import {Alert, DeviceEventEmitter, Platform} from "react-native";
import {getDeviceId, getSystemVersion} from "react-native-device-info";
import Config from "react-native-config";
import {IBaseResponse} from "@services/dtos/base";
import {Keys} from "@constants";

const REQUEST_TIME_OUT = 30000;
const instance = axios.create({
  timeout: REQUEST_TIME_OUT,
  baseURL: Config.API_SERVICE_HOST_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json;charset=utf-8",
    "user-agent": `${Platform.OS};${getSystemVersion()}`,
    "TOK-DEVICE-ID": getDeviceId()
  }
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  }
);
instance.interceptors.response.use(
  response => response.data,
  async function (error: AxiosError<IBaseResponse<unknown>>) {
    if (error.code === "401") {
      DeviceEventEmitter.emit(Keys.user_unauthorized);
      return;
    }
    Alert.alert("Ops!", `${error.message} (${error.code})`);
  }
);

export default instance;
