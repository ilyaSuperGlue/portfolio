import React, { useMemo } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

import { IconProps } from "react-native-vector-icons/Icon";

export interface iIcon extends IconProps {
  type?: iIconType;
}

export type iIconType =
  | "MaterialCommunityIcon"
  | "Ionicons"
  | "FontAwesome5"
  | "FontAwesome6"
  | "Fontisto"
  | "AntDesign";

const Icon = (props: iIcon) => {
  const GetIcon = useMemo(() => {
    switch (props?.type) {
      case "Ionicons":
        return <Ionicons {...props} />;
      case "FontAwesome5":
        return <FontAwesome5 {...props} />;
      case "Fontisto":
        return <Fontisto {...props} />;
      case "FontAwesome6":
        return <FontAwesome6 {...props} />;
      case "AntDesign":
        return <AntDesign {...props} />;
      default:
        return <MaterialCommunityIcon {...props} />;
    }
  }, [props]);

  return GetIcon;
};

export default Icon;
