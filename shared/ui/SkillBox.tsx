import { View } from "react-native";
import React, { useMemo } from "react";
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
  const { styles, breakpoint } = useStyles(StyleSheet);
  const defaultIconSize = useMemo(() => {
    switch (breakpoint) {
      case "xs":
        return 20;
      case "sm":
        return 30;
      default:
        return 60;
    }
  }, [breakpoint]);

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
        size={defaultIconSize}
      />
      <Typography
        type="Poppins_400Regular"
        style={{ fontSize: 12, letterSpacing: 1, fontWeight: "500" }}
      >
        {text}
      </Typography>
    </Animated.View>
  );
};

export default SkillBox;

const StyleSheet = createStyleSheet({
  container: {
    flexDirection: "row",
    padding: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eaeaeaaa",
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
    gap: 10,
  },
});
