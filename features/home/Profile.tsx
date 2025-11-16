import { Image, View } from "react-native";
import React from "react";
import Animated, {
  LightSpeedInLeft,
  LightSpeedInRight,
} from "react-native-reanimated";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import { ilyas } from "@/assets/images/images";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import DayJs from "dayjs";

const Profile = () => {
  const { styles } = useStyles(StyleSheet);
  return (
    <View style={styles.container}>
      <Typography
        type="Poppins_700Bold"
        style={{
          fontSize: 30,
          color: colors.black,
          marginBottom: 30,
        }}
      >
        About Me
      </Typography>
      <View style={styles.sectionRow}>
        <Animated.View
          style={styles.rowLeft}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_500Medium" style={styles.textSection}>
            I have {DayJs().diff("01/01/2020", "years") + " "}
            years of experience in developing mobile apps using React Native,
            and I am also experienced in building Backend using NodeJS or
            Laravel.
          </Typography>
          <Typography
            type="Poppins_500Medium"
            style={[styles.textSection, { marginTop: 20 }]}
          >
            I like learning new technology because technology is getting more
            advance every day and i don't want to miss out on it.
          </Typography>
        </Animated.View>
        <Animated.View
          style={styles.rowRight}
          entering={LightSpeedInRight.delay(100)}
        >
          <Image source={ilyas} style={styles.img} resizeMode="center" />
        </Animated.View>
      </View>
    </View>
  );
};

export default Profile;

const StyleSheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: {
      md: 600,
      sm: 600,
      xs: 400,
      lg: 800,
      xl: 800,
      superLarge: 800,
      tvLike: 800,
    },
    aspectRatio: 1,
  },
  rowLeft: {
    alignItems: "center",
  },
  rowRight: {
    alignItems: "center",
  },
  sectionRow: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textSection: {
    fontSize: {
      xs: 19,
      sm: 20,
      md: 20,
      lg: 20,
      xl: 20,
      superLarge: 20,
    },
    lineHeight: 30,
    maxWidth: {
      md: 500,
      sm: 430,
      xs: 400,
      lg: 1000,
      xl: 1000,
      superLarge: 2000,
      tvLike: 4000,
    },
    color: colors.black,
    paddingHorizontal: 20,
  },
}));
