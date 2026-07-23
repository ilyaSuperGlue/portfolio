import { View } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/constant/colors";
import Animated, { LinearTransition } from "react-native-reanimated";
import FreeCard, { IFreeCard } from "./FreeCard";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const FreeCardList = (item: {
  title: string;
  data: IFreeCard[];
  count: number;
}) => {
  const { styles } = useStyles(stylesheet);
  if (item.count === 0) {
    return null;
  }
  return (
    <View style={styles.flex}>
      <Typography type="Poppins_600SemiBold" style={styles.txtTitle}>
        {item.title}
      </Typography>
      <Typography type="Poppins_300Light" style={styles.txtFreebies}>
        {item.count} freebies on {item.title}
      </Typography>
      <View style={styles.divider} />
      <Animated.View layout={LinearTransition} style={styles.wrap}>
        {item.data.map((game) => {
          return <FreeCard {...game} />;
        })}
      </Animated.View>
    </View>
  );
};

export default FreeCardList;

const stylesheet = createStyleSheet(() => ({
  flex: { flex: 1 },
  txtTitle: {
    fontSize: 25,
    color: colors.steam.milk,
    marginTop: 30,
  },
  txtFreebies: { color: colors.steam.milk },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.steam.milk,
    marginVertical: 20,
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
}));
