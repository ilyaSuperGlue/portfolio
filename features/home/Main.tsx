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
      <View style={{ flexWrap: "wrap" }}>
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
      sm: 34,
      md: 36,
    },
    lineHeight: {
      xs: 38,
      sm: 40,
      md: 54,
    },
    color: colors.black,
    paddingHorizontal: 20,
    marginBottom: {
      xs: 5,
      sm: 10,
      md: 0,
    },
  },
  textName: {
    fontSize: {
      xs: 30,
      sm: 34,
      md: 48,
      superLarge: 48,
      tvLike: 60,
    },
    lineHeight: {
      xs: 38,
      sm: 40,
      md: 72,
      tvLike: 100,
    },
    color: colors.secondary,
    paddingHorizontal: 20,
    marginBottom: {
      xs: 5,
      sm: 10,
      md: 0,
    },
  },
  textDesc: {
    fontSize: {
      xs: 18,
      sm: 20,
      md: 30,
    },
    lineHeight: {
      xs: 24,
      sm: 30,
      md: 45,
    },
    color: colors.black,
    maxWidth: 850,
    paddingHorizontal: 20,
    marginBottom: {
      xs: 5,
      md: 0,
    },
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: {
      xs: 20,
      sm: 30,
      md: 40,
    },
    marginBottom: 200,
    paddingHorizontal: 20,
  },
  btnLinkedin: {
    marginLeft: {
      xs: 10,
      sm: 12,
      md: 28,
    },
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#999999aa",
    width: {
      xs: 100,
      sm: 140,
      md: 190,
    },
  },
  btnGithub: {
    width: {
      xs: 100,
      sm: 140,
      md: 190,
    },
  },
});
