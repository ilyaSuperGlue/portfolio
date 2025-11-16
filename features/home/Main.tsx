import { Dimensions, Linking, View } from "react-native";
import React from "react";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import { colors } from "@/shared/constant/colors";
import Button from "@/shared/ui/Button";
import Typography from "@/shared/ui/Typography";
import { createStyleSheet, useStyles } from "react-native-unistyles";
const { height } = Dimensions.get("window");

const Main = () => {
  const { styles } = useStyles(StyleSheet);
  return (
    <View style={styles.container}>
      <View>
        <Animated.View entering={LightSpeedInLeft.delay(100)}>
          <Typography type="Poppins_600SemiBold" style={styles.textGreet}>
            Hey, I am
          </Typography>
        </Animated.View>
        <Animated.View entering={LightSpeedInLeft.delay(200)}>
          <Typography type="Poppins_700Bold" style={styles.textName}>
            Ilyas Abdurahman Yusuf
          </Typography>
        </Animated.View>
        <Animated.View entering={LightSpeedInLeft.delay(300)}>
          <Typography type="Poppins_600SemiBold" style={styles.textDesc}>
            a software Enginer from Indonesia, i make Mobile Apps, Website,
            Backend and other Magic Stuff ✨
          </Typography>
        </Animated.View>
        <Animated.View
          entering={LightSpeedInLeft.delay(400)}
          style={styles.btnContainer}
        >
          <Button
            withIcon
            iconProps={{ name: "logo-github" }}
            text="Github"
            style={styles.btnGithub}
            onPress={() => Linking.openURL("https://github.com/ilyaSuperGlue")}
          />
          <Button
            withIcon
            iconProps={{
              name: "logo-linkedin",
              color: colors.primary,
            }}
            text="LinkedIn"
            style={styles.btnLinkedin}
            textProps={{ style: { color: colors.black } }}
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/ilyas-abdurahman-yusuf")
            }
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Main;

const StyleSheet = createStyleSheet({
  container: {
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  textGreet: {
    fontSize: {
      xs: 30,
      sm: 36,
      md: 36,
      lg: 36,
      xl: 36,
      superLarge: 36,
    },
    lineHeight: {
      xs: 40,
      sm: 54,
      md: 54,
      lg: 54,
      xl: 54,
      superLarge: 54,
    },
    color: colors.black,
    paddingHorizontal: 20,
  },
  textName: {
    fontSize: {
      xs: 40,
      sm: 48,
      md: 48,
      lg: 48,
      xl: 48,
      superLarge: 48,
      tvLike: 60,
    },
    lineHeight: {
      xs: 55,
      sm: 72,
      md: 72,
      lg: 72,
      xl: 72,
      superLarge: 72,
      tvLike: 100,
    },
    color: colors.secondary,
    paddingHorizontal: 20,
  },
  textDesc: {
    fontSize: {
      xs: 25,
      sm: 30,
      md: 30,
      lg: 30,
      xl: 30,
      superLarge: 30,
    },
    lineHeight: {
      xs: 40,
      sm: 45,
      md: 45,
      lg: 45,
      xl: 45,
      superLarge: 45,
    },
    color: colors.black,
    maxWidth: 850,
    paddingHorizontal: 20,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 200,
    paddingHorizontal: 20,
  },
  btnLinkedin: {
    marginLeft: 28,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#999999aa",
    width: {
      xs: 170,
      sm: 190,
      md: 190,
      lg: 190,
      xl: 190,
      superLarge: 190,
    },
  },
  btnGithub: {
    width: {
      xs: 170,
      sm: 190,
      md: 190,
      lg: 190,
      xl: 190,
      superLarge: 190,
    },
  },
});
