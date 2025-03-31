import axios from "axios";
import {Platform} from "react-native";
import {getDeviceId, getSystemVersion} from "react-native-device-info";
import Config from "react-native-config";

const REQUEST_TIME_OUT = 30000;
const instance = axios.create({
  timeout: REQUEST_TIME_OUT,
  baseURL: Config.API_IAM_HOST_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json;charset=utf-8",
    "user-agent": `${Platform.OS};${getSystemVersion()}`,
    "TOK-DEVICE-ID": getDeviceId()
  }
});

export default instance;
