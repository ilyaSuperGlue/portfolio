import { Platform } from "react-native";

const webApi = () => {
  return Platform.OS === "web" ? document : null;
};

export default webApi;
