import { Image, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import Typography from "@/shared/ui/Typography";
import { portfolio } from "@/shared/constant/portfolio";
import { createStyleSheet, useStyles } from "react-native-unistyles";
const Projects = () => {
  const { styles } = useStyles(StyleSheet);
  return (
    <View style={styles.container}>
      <Typography
        type="Poppins_700Bold"
        style={{ fontSize: 24, marginTop: 30, marginBottom: 22 }}
      >
        Projects
      </Typography>
      <Typography type="Poppins_500Medium" style={styles.textSection}>
        Checkout some cool projects that i have developed in the past.
      </Typography>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {portfolio.map((item) => (
          <Animated.View style={styles.box} key={item?.title}>
            <Image source={item?.image} style={styles.img} />
            <View style={styles.textBox}>
              <Typography type="Poppins_700Bold" style={{ fontSize: 16 }}>
                {item?.title}
              </Typography>
              <Typography
                type="Poppins_400Regular"
                style={{ fontSize: 14, marginTop: 10 }}
              >
                {item?.desc}
              </Typography>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default Projects;

const StyleSheet = createStyleSheet(() => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  box: {
    margin: 30,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: {
      md: 600,
      sm: 500,
      xs: 300,
      lg: 700,
      xl: 700,
      superLarge: 1000,
      tvLike: 2000,
    },
    height: {
      md: 350,
      sm: 350,
      xs: 200,
      lg: 400,
      xl: 400,
      superLarge: 800,
      tvLike: 1600,
    },
    // height: 400,
    resizeMode: "contain",
  },
  textBox: {
    padding: 20,
    maxWidth: {
      md: 600,
      sm: 500,
      xs: 300,
      lg: 700,
      xl: 700,
      superLarge: 1000,
      tvLike: 2000,
    },
  },
  rowLeft: {
    flex: 1,
    alignItems: {
      md: "center",
      sm: "center",
      xs: "center",
      lg: "flex-start",
      xl: "flex-start",
    },
    minWidth: {
      md: 600,
      sm: 400,
      xs: 400,
      lg: 992 / 2,
      xl: 1200 / 2,
      superLarge: 2000,
      tvLike: 4000,
    },
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
    paddingHorizontal: 20,
  },
}));
