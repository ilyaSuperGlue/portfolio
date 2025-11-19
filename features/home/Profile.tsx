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
      <Typography type="Poppins_700Bold" style={styles.title}>
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
      xs: 320,
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
      xs: 18,
      sm: 20,
    },
    lineHeight: {
      xs: 28,
      sm: 30,
    },
    maxWidth: {
      xs: 320,
      sm: 500,
      lg: 1000,
      xl: 1000,
      superLarge: 2000,
      tvLike: 4000,
    },
    color: colors.black,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: {
      xs: 25,
      md: 30,
    },
    color: colors.black,
    marginBottom: {
      xs: 15,
      md: 30,
    },
  },
}));
