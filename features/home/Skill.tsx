import { Dimensions, View } from "react-native";
import React from "react";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import SkillBox from "@/shared/ui/SkillBox";
import { skills } from "@/shared/constant/skills";
import { createStyleSheet, useStyles } from "react-native-unistyles";
const { width } = Dimensions.get("window");

const Skill = () => {
  const { styles } = useStyles(StyleSheet);
  return (
    <View style={styles.container}>
      <Typography type="Poppins_700Bold" style={styles.title}>
        Skills
      </Typography>
      <Typography type="Poppins_500Medium" style={styles.textSection}>
        Here are some of technology that i usually use
      </Typography>
      <View style={styles.skillContainer}>
        {skills.map((item, index) => (
          <SkillBox {...item} key={item?.text + index} />
        ))}
      </View>
    </View>
  );
};

export default Skill;

const StyleSheet = createStyleSheet({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
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
    maxWidth: 720,
    color: colors.black,
    marginVertical: 20,
    paddingHorizontal: {
      xs: 0,
      sm: 20,
    },
    textAlign: "left",
  },
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: {
      xs: width,
      md: width,
      sm: width,
      lg: width / 1.5,
      xl: width / 1.5,
      superLarge: width / 1.5,
      tvLike: width / 1.5,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: {
      xs: 25,
      md: 30,
    },
    color: colors.black,
  },
});
