import { useFonts } from "expo-font";

const useFontReady = () => {
  let [fontsLoaded, error] = useFonts({
    Poppins_300Light: require("../../assets/fonts/Poppins_300Light.ttf"),
    Poppins_400Regular: require("../../assets/fonts/Poppins_400Regular.ttf"),
    Poppins_500Medium: require("../../assets/fonts/Poppins_500Medium.ttf"),
    Poppins_600SemiBold: require("../../assets/fonts/Poppins_600SemiBold.ttf"),
    Poppins_700Bold: require("../../assets/fonts/Poppins_700Bold.ttf"),
  });

  return { fontReady: fontsLoaded, error };
};

export default useFontReady;
