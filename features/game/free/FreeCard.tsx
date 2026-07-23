import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import { Image, Linking, Pressable, View } from "react-native";
import PlatformIcons from "./PlatformIcons";
import dayjs from "dayjs";
import useIsMobile from "@/shared/lib/useIsMobile";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export interface IFreeCard {
  id: number;
  title: string;
  worth: string;
  thumbnail: string;
  image: string;
  description: string;
  instructions: string;
  open_giveaway_url: string;
  published_date: string;
  type: string;
  platforms: string;
  end_date: string;
  users: number;
  status: string;
  gamerpower_url: string;
  open_giveaway: string;
}

const FreeCard = (game: IFreeCard) => {
  const { isMobile } = useIsMobile();
  const { styles } = useStyles(stylesheet);

  if (isMobile) {
    return (
      <Pressable
        onPress={() => Linking.openURL(game.open_giveaway_url)}
        key={game.id}
        style={styles.mblContainer}
      >
        <View style={styles.mRow}>
          <View style={styles.imgConM}>
            <Image
              source={{
                uri: game.thumbnail,
              }}
              style={styles.imgM}
            />
            <View style={styles.titleConM}>
              <Typography
                type="Poppins_500Medium"
                style={styles.texttittleM}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {game.title}
              </Typography>
            </View>
            <View style={styles.priceRowCon}>
              <View style={styles.priceConM}>
                <Typography style={styles.txtpercent} type="Poppins_700Bold">
                  -100%
                </Typography>
              </View>
              <View>
                <Typography
                  type="Poppins_500Medium"
                  style={styles.txtWorthM(game?.worth ?? "")}
                >
                  {game.worth}
                </Typography>
                <Typography type="Poppins_500Medium" style={styles.txtZero}>
                  $0
                </Typography>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rowBtw}>
          <PlatformIcons platform={game.platforms} />
          {game.end_date !== "N/A" && (
            <Typography type="Poppins_600SemiBold" style={styles.txtdateM}>
              until {dayjs(game.end_date).format("DD MMM YYYY")}
            </Typography>
          )}
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={() => Linking.openURL(game.open_giveaway_url)}
      key={game.id}
      style={styles.btnConD}
    >
      <View style={styles.imgCon}>
        <Image
          source={{
            uri: game.thumbnail,
          }}
          style={styles.imgD}
        />
        <View style={styles.titleCon}>
          <Typography
            type="Poppins_500Medium"
            style={styles.txttitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {game.title}
          </Typography>
          <View style={{ flexDirection: "row" }}>
            <PlatformIcons platform={game.platforms} />
          </View>
          {game.end_date !== "N/A" && (
            <Typography type="Poppins_600SemiBold" style={styles.txtdate}>
              until {dayjs(game.end_date).format("DD MMM YYYY")}
            </Typography>
          )}
        </View>
      </View>

      <View style={styles.last}>
        <View style={styles.priceCon}>
          <Typography
            style={{ color: colors.steam.green }}
            type="Poppins_700Bold"
          >
            -100%
          </Typography>
        </View>
        <View>
          <Typography
            type="Poppins_500Medium"
            style={styles.txtWorth(game?.worth ?? "")}
          >
            {game.worth}
          </Typography>
          <Typography type="Poppins_500Medium" style={styles.txtDollar}>
            $0
          </Typography>
        </View>
      </View>
    </Pressable>
  );
};

export default FreeCard;

const stylesheet = createStyleSheet(({}, { breakpoint }) => ({
  mblContainer: {
    padding: 10,
    gap: 10,
    width: "100%",
    backgroundColor: colors.steam.black,
  },
  txtDollar: {
    color: colors.steam.green,
    fontSize: 20,
  },
  txtWorth: (worth: string) => ({
    color: colors.steam.milk,
    fontSize: 18,
    textDecoration: worth !== "N/A" ? "line-trough" : "",
    textDecorationLine: "line-through",
    textDecorationColor: colors.white,
  }),
  priceCon: {
    backgroundColor: colors.steam.greenDark,
    height: "30%",
    padding: 10,
  },
  last: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 5,
    alignSelf: "flex-end",
  },
  txttitle: {
    color: colors.steam.milk,
    fontSize: 20,
  },
  txtdate: {
    fontSize: 14,
    color: colors.steam.greenDark,
  },
  titleCon: {
    justifyContent: "space-around",
    flex: 1,
    gap: 10,
  },
  imgD: {
    height: 100,
    aspectRatio: 2.5,
  },
  imgCon: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
  },
  btnConD: {
    flexDirection: "row",
    padding: 20,
    gap: 10,
    width: breakpoint === "lg" ? "100%" : "48%",
    justifyContent: "space-between",
    backgroundColor: colors.steam.black,
  },
  txtWorthM: (worth: string) => ({
    color: colors.steam.milk,
    fontSize: 12,
    textDecoration: worth !== "N/A" ? "line-trough" : "",
    textDecorationLine: "line-through",
    textDecorationColor: colors.white,
  }),
  txtZero: {
    color: colors.steam.green,
    fontSize: 14,
  },
  rowBtw: { flexDirection: "row", justifyContent: "space-between" },
  priceConM: {
    backgroundColor: colors.steam.greenDark,
    height: "30%",
    padding: 2,
  },
  priceRowCon: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 5,
    alignSelf: "flex-end",
  },
  titleConM: {
    justifyContent: "space-around",
    flex: 1,
    gap: 10,
  },
  mRow: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
  },
  imgConM: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    alignItems: "center",
  },
  imgM: {
    height: 40,
    aspectRatio: 2,
  },
  txtdateM: {
    fontSize: 12,
    color: colors.steam.greenDark,
  },
  txtpercent: {
    color: colors.steam.green,
    fontSize: 10,
  },
  texttittleM: {
    color: colors.steam.milk,
    fontSize: 12,
  },
}));
