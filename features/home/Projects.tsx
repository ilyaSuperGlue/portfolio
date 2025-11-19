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
      <Typography type="Poppins_700Bold" style={styles.title}>
        Projects
      </Typography>
      <Typography type="Poppins_500Medium" style={styles.textSection}>
        Checkout some cool projects that i have developed in the past.
      </Typography>
      <View style={styles.boxContainer}>
        {portfolio.map((item) => (
          <Animated.View style={styles.box} key={item?.title}>
            <Image source={item?.image} style={styles.img} />
            <View style={styles.textBox}>
              <Typography type="Poppins_700Bold" style={styles.textTitle}>
                {item?.title}
              </Typography>
              <Typography type="Poppins_400Regular" style={styles.textDesc}>
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
    margin: {
      xs: 20,
      sm: 30,
    },
    marginHorizontal: {
      xs: 0,
      sm: 20,
    },
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: {
      xs: 20,
      sm: 30,
    },
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "45%",
    },
  },
  img: {
    width: "100%",
    height: {
      xs: 180,
      sm: 350,
      lg: 400,
      superLarge: 800,
      tvLike: 1600,
    },
    resizeMode: "contain",
    alignSelf: "center",
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
      xs: 16,
      sm: 20,
    },
    lineHeight: {
      xs: 25,
      sm: 30,
    },
    paddingHorizontal: {
      xs: 0,
      sm: 20,
    },
  },
  title: {
    fontSize: {
      xs: 25,
      sm: 30,
    },
    marginTop: 30,
    marginBottom: {
      xs: 10,
      sm: 22,
    },
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: {
      xs: 0,
      sm: 20,
    },
  },
  textTitle: {
    fontSize: {
      xs: 14,
      sm: 16,
    },
  },
  textDesc: {
    fontSize: {
      xs: 12,
      md: 14,
    },
    marginTop: {
      xs: 5,
      md: 10,
    },
  },
}));
