import { Platform } from "react-native";

const IS_WEB = Platform.OS === "web";
const IS_MOBILE = Platform.OS === "android" || Platform.OS === "ios";

const PLATFORM = {
  IS_WEB,
  IS_MOBILE,
};
export default PLATFORM;
