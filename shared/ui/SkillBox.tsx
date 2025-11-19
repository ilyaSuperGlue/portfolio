import { View } from "react-native";
import React from "react";
import Typography from "./Typography";
import Icon, { iIconType } from "./Icon";
import { colors } from "../constant/colors";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Animated, { SequencedTransition } from "react-native-reanimated";

export interface iSkillBox {
  icon: {
    type?: iIconType;
    name: string;
    color?: string;
  };
  text: string;
}

const SkillBox = ({ icon, text }: iSkillBox) => {
  const { styles } = useStyles(StyleSheet);
  return (
    <Animated.View
      style={styles.container}
      key={text}
      layout={SequencedTransition}
    >
      <Icon
        name={icon?.name}
        type={icon?.type ?? "MaterialCommunityIcon"}
        color={icon?.color ?? colors.black}
        size={100}
      />
      <Typography
        type="Poppins_400Regular"
        style={{ fontSize: 14, letterSpacing: 1 }}
      >
        {text}
      </Typography>
    </Animated.View>
  );
};

export default SkillBox;

const StyleSheet = createStyleSheet({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eaeaeaaa",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: {
      xs: 160,
      sm: 175,
      md: 175,
      lg: 175,
      xl: 175,
      superLarge: 175,
      tvLike: 175,
    },
  },
});
