import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
} from "react-native";
import { useEffect, useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import useFontReady from "@/shared/lib/useFontReady";
import { useRouter } from "expo-router";
import Icon from "@/shared/ui/Icon";
import FreeCardList from "@/features/game/free/FreeCardList";
import webApi from "@/shared/lib/webApi";
import useGetFreeGame from "@/api/useGetFreeGame";
import Button from "@/shared/ui/Button";
const { height } = Dimensions.get("window");

const platforms = ["Steam", "Epic Games Store", "Itch.io", "Gacha", "Others"];
const GachaGames = [
  "genshin",
  "wuthering",
  "honkai",
  "arknight",
  "nikke",
  "blue archive",
  "nte:",
  "neverness",
];

const FreeGame = () => {
  const { styles } = useStyles(stylesheet);
  const { fontReady } = useFontReady();
  const { data: freeGames, refetch, loading, error } = useGetFreeGame();
  const { navigate } = useRouter();

  useEffect(() => {
    const doc = webApi();
    if (doc != undefined) {
      doc.title = "Free Games - ilyasuperglue.github.io";
    }
  }, []);

  const data = useMemo(() => {
    const per_platforms = platforms.map((p) => {
      const filteredGames = freeGames.filter((it) => {
        if (p === "Others") {
          return (
            !it.platforms.includes("Steam") &&
            !it.platforms.includes("Epic") &&
            !it.platforms.includes("Itch.io") &&
            it.type !== "Game" &&
            !GachaGames.some((gacha) => it.title.toLowerCase().includes(gacha))
          );
        }
        if (p === "Gacha") {
          return GachaGames.some((gacha) =>
            it.title.toLowerCase().includes(gacha),
          );
        }
        return it.platforms.includes(p) && it.type === "Game";
      });

      return {
        title: p,
        data: filteredGames,
        count: filteredGames.length,
      };
    });
    return per_platforms;
  }, [freeGames]);

  if (!fontReady || (loading && freeGames.length < 1)) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size={"large"} animating color={colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <FreeCardList
              title={item.title}
              count={item.count}
              data={item.data}
            />
          );
        }}
        ListEmptyComponent={() => {
          if (error) {
            return (
              <View style={styles.errorContainer}>
                <Typography type="Poppins_400Regular" style={styles.textError}>
                  Oops, {error || "Something went wrong."}
                </Typography>
                <Button
                  withIcon={false}
                  style={styles.btnError}
                  textProps={{
                    style: styles.textBtn,
                  }}
                  text="Go back home"
                  onPress={() => navigate("/")}
                />
              </View>
            );
          }
          return null;
        }}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <Icon
              name="react"
              type="MaterialCommunityIcon"
              color={colors.secondary}
              size={20}
            />
            <Typography type="Poppins_300Light" style={styles.textFooter}>
              Powered by React Native Web
            </Typography>
          </View>
        }
      />
    </View>
  );
};

export default FreeGame;

const stylesheet = createStyleSheet(() => ({
  container: {
    backgroundColor: colors.steam.bg,
    height: "100%",
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 20,
  },
  textFooter: {
    marginLeft: 5,
    color: colors.black,
    fontSize: 12,
  },
  btnError: {
    backgroundColor: colors.steam.black,
    width: 200,
    borderColor: colors.steam.black,
  },
  textError: {
    fontSize: 20,
    color: colors.steam.milk,
  },
  textBtn: {
    color: colors.steam.milk,
    fontSize: 14,
  },
  errorContainer: {
    height,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
}));
