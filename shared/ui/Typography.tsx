import { Text, TextProps } from "react-native";
import React from "react";

const Typography = (props: iTypography) => {
    return (
        <Text
            {...props}
            style={[{
                fontFamily: props?.type ?? "Poppins_400Regular",
                fontSize: 14,
            }, props?.style]}
        />
    );
};

export default Typography;

export interface iTypography extends TextProps {
    type?:
        | "Poppins_300Light"
        | "Poppins_400Regular"
        | "Poppins_500Medium"
        | "Poppins_600SemiBold"
        | "Poppins_700Bold";
}
