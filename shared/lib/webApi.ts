import { Platform } from "react-native";

const webApi = () => {
  return Platform.OS === "web" ? document : null;
};

export const webStorage = () => {
  if (typeof window !== "undefined") {
    return Platform.OS === "web" ? localStorage : null;
  }
  return null;
};

export default webApi;
