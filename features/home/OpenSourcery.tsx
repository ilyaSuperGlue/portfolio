import { FlatList, Image, Linking, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, {
  LightSpeedInLeft,
  SequencedTransition,
} from "react-native-reanimated";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { libraries, TLibrary } from "@/shared/constant/libraries";
import { useRouter } from "expo-router";
import Button from "@/shared/ui/Button";

const LibraryCard = ({ item }: { item: TLibrary; index: number }) => {
  const { styles } = useStyles(StyleSheet);
  const { navigate } = useRouter();
  return (
    <Animated.View
      key={item.name}
      style={styles.itemContainer}
      layout={SequencedTransition}
    >
      <Typography
        style={{
          fontSize: 16,
          lineHeight: 20,
          letterSpacing: 0.8,
          marginBottom: 5,
        }}
        type="Poppins_600SemiBold"
      >
        {item.name}
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          padding: 5,
        }}
        type="Poppins_500Medium"
      >
        "{item.describe}"
      </Typography>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          flex: 1,
          justifyContent: "flex-end",
          gap: 10,
          marginRight: 10,
        }}
      >
        <Button
          withIcon
          iconProps={{ name: "logo-github", size: 20, color: colors.black }}
          text="Github"
          style={styles.btnGithub}
          textProps={{
            style: {
              fontSize: 16,
              color: colors.black,
            },
          }}
          onPress={() => Linking.openURL(item.git)}
        />
        <Button
          withIcon
          iconProps={{
            name: "code",
            color: colors.white,
            size: 20,
            type: "AntDesign",
          }}
          text="Demo"
          style={styles.btnLinkedin}
          textProps={{
            style: { color: colors.white, fontSize: 16, fontWeight: "500" },
            type: "Poppins_500Medium",
          }}
          onPress={() => navigate("/demo/" + item.demo)}
        />
      </View>
    </Animated.View>
  );
};

const OpenSourcery = () => {
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
        Open Source Library
      </Typography>
      <View style={styles.sectionRow}>
        <Animated.View
          style={styles.rowLeft}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_500Medium" style={styles.textSection}>
            Some open source library that i have publish.
          </Typography>
        </Animated.View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {libraries.map((item, index) => (
            <LibraryCard key={item.name} item={item} index={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default OpenSourcery;

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
  itemContainer: {
    width: {
      md: 500,
      sm: 400,
      xs: 350,
    },
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
    borderRadius: 5,
    marginRight: 20,
  },
  btnLinkedin: {
    backgroundColor: colors.black,
    width: 140,
    height: 40,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnGithub: {
    width: 140,
    height: 40,
    borderRadius: 2,
    borderWidth: 0,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
}));
