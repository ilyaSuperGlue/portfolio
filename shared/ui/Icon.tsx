import React, { useMemo } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import { IconProps } from "react-native-vector-icons/Icon";

export interface iIcon extends IconProps {
    type?: iIconType;
}

export type iIconType =
    | "MaterialCommunityIcon"
    | "Ionicons"
    | "FontAwesome5"
    | "Fontisto";

const Icon = (props: iIcon) => {
    const GetIcon = useMemo(() => {
        switch (props?.type) {
            case "Ionicons":
                return <Ionicons {...props} />;
            case "FontAwesome5":
                return <FontAwesome5 {...props} />;
            case "Fontisto":
                return <Fontisto {...props} />;
            default:
                return <MaterialCommunityIcon {...props} />;
        }
    }, [props]);

    return GetIcon;
};

export default Icon;
