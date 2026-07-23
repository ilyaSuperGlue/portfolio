import { colors } from "@/shared/constant/colors";
import Icon from "@/shared/ui/Icon";
import Typography from "@/shared/ui/Typography";
import { Fragment } from "react";
import { View } from "react-native";

const PlatformIcons = ({ platform }: { platform: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      {platform.includes("PC") && (
        <Fragment>
          <Icon
            name="logo-windows"
            type="Ionicons"
            size={25}
            color={colors.steam.milk}
          />
          <Icon
            name="linux"
            type="FontAwesome6"
            size={25}
            color={colors.steam.milk}
          />
          <Icon
            name="logo-apple"
            type="Ionicons"
            size={25}
            color={colors.steam.milk}
          />
        </Fragment>
      )}
      {platform.includes("Android") && (
        <Icon
          name="logo-android"
          type="Ionicons"
          size={25}
          color={colors.steam.milk}
        />
      )}
      {platform.includes("iOS") && (
        <Typography
          type="Poppins_300Light"
          style={{
            fontSize: 20,
            color: colors.steam.milk,
          }}
        >
          iOS
        </Typography>
      )}
      {platform.includes("Playstation") && (
        <Icon
          name="logo-playstation"
          type="Ionicons"
          size={25}
          color={colors.steam.milk}
        />
      )}
      {platform.includes("Xbox") && (
        <Icon
          name="logo-xbox"
          type="Ionicons"
          size={25}
          color={colors.steam.milk}
        />
      )}
      {platform.includes("Nintendo") && (
        <Icon
          name="nintendo-switch"
          type="MaterialCommunityIcon"
          size={25}
          color={colors.steam.milk}
        />
      )}
    </View>
  );
};

export default PlatformIcons;
