import { link } from "@/shared/constant/link";
import { iIconType } from "@/shared/ui/Icon";
import { Linking } from "react-native";

interface TContantBtn {
  icon: string;
  text: string;
  onPress: (...text: string[]) => void;
  type?: iIconType;
}

export const contactBtn: TContantBtn[] = [
  {
    icon: "logo-linkedin",
    text: "LinkedIn",
    onPress: () => {
      Linking.openURL("https://linkedin.com/in/ilyas-abdurahman-yusuf");
    },
  },
  {
    icon: "email-outline",
    type: "MaterialCommunityIcon",
    text: "Email",
    onPress: (...text: string[]) => {
      Linking.openURL(
        "mailto:ilyasabdurahmanyusuf@gmail.com?subject=" +
          text[0] +
          "&body=" +
          text[1],
      );
    },
  },
  {
    icon: "file-search",
    type: "AntDesign",
    text: "Checkout My CV",
    onPress: () => {
      Linking.openURL(link.cv);
    },
  },
];
