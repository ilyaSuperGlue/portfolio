import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Typography from "./Typography";
import { colors } from "../constant/colors";
import { iSections } from "@/app";
import { icon, iconUpscale, ilyas } from "@/assets/images/images";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Icon from "./Icon";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutUp,
  LightSpeedInLeft,
  LightSpeedInRight,
  LightSpeedOutLeft,
  SlideInLeft,
  SlideOutLeft,
} from "react-native-reanimated";
import { useCallback, useEffect, useState } from "react";

const { width: DWidth, height: Dheight } = Dimensions.get("window");

interface IHeader {
  data: iSections[];
  onPress: (screen: iSections) => void;
  type?: "parent" | "child";
}

export default function Header({ type = "parent", ...props }: IHeader) {
  const { styles, breakpoint } = useStyles(StyleSheet);
  const [modal, setModal] = useState(false);
  const [{ width, height }, setDimension] = useState({
    width: DWidth,
    height: Dheight,
  });

  const closeModal = useCallback(() => setModal(false), []);
  const openModal = useCallback(() => setModal(true), []);

  const onPress = (screen: iSections) => {
    if (breakpoint !== "md" && breakpoint !== "sm" && breakpoint !== "xs") {
      props?.onPress(screen);
      return;
    }
    closeModal();
    setTimeout(() => {
      props?.onPress(screen);
    }, 500);
  };

  useEffect(() => {
    if (breakpoint !== "md" && breakpoint !== "sm" && breakpoint !== "xs") {
      setModal(false);
    }
    setDimension({
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    });
  }, [breakpoint]);

  if (breakpoint !== "md" && breakpoint !== "sm" && breakpoint !== "xs") {
    return (
      <View style={styles.headerContainer}>
        <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
          <TouchableOpacity onPress={() => onPress("home")}>
            <Image source={icon} style={styles.imgIcon} />
          </TouchableOpacity>
        </Animated.View>
        {props?.data?.map((item, index) => {
          return (
            <Animated.View
              entering={FadeInDown.delay((index + 1) * 100)}
              exiting={FadeOutDown.delay((index + 1) * 100)}
            >
              <TouchableOpacity
                onPress={() => onPress(item)}
                key={"headeritem" + item + index}
              >
                <Typography style={styles.textHeader}>{item}</Typography>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    );
  }
  return (
    <Animated.View style={styles.headerMobileContainer}>
      <Animated.View
        entering={FadeInUp.delay(100)}
        exiting={FadeOutUp.delay(100)}
      >
        {type === "parent" ? (
          <TouchableOpacity onPress={openModal}>
            <Icon
              type="MaterialCommunityIcon"
              name="menu"
              color={colors.secondary}
              size={60}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onPress("home")}>
            <Image source={icon} style={styles.imgIcon} />
          </TouchableOpacity>
        )}
      </Animated.View>
      <Modal
        transparent
        visible={modal}
        onRequestClose={closeModal}
        animationType="fade"
      >
        <Pressable
          style={{
            width,
            height,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
          onPress={closeModal}
        >
          <Animated.View
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutLeft}
          >
            <Pressable
              style={{
                height,
                width: width * 0.65,
                backgroundColor: colors.white,
                padding: 40,
                alignItems: "center",
              }}
            >
              <Image
                source={iconUpscale}
                resizeMode="contain"
                style={{ height: 140, width: 300 }}
              />
              <Typography
                type="Poppins_600SemiBold"
                style={{
                  width: 200,
                  textAlign: "center",
                  fontSize: 20,
                  color: colors.primary,
                }}
              >
                Ilyas Abdurahman Yusuf
              </Typography>
              <View style={{ width: "100%", marginTop: 53 }}>
                {props?.data?.map((item, index) => (
                  <Animated.View
                    entering={LightSpeedInLeft.delay((index + 1) * 100)}
                    exiting={LightSpeedOutLeft}
                  >
                    <TouchableOpacity
                      onPress={() => onPress(item)}
                      key={"headeritemmobile" + item + index}
                    >
                      <Typography
                        type="Poppins_400Regular"
                        style={{
                          fontSize: 20,
                          lineHeight: 30,
                          color: colors.secondary,
                          textTransform: "capitalize",
                          marginTop: 40,
                        }}
                      >
                        {item}
                      </Typography>
                    </TouchableOpacity>
                  </Animated.View>
                ))}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <Animated.View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "flex-end",
                  }}
                  entering={LightSpeedInLeft.delay(1000)}
                  exiting={LightSpeedOutLeft}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      maxWidth: "100%",
                    }}
                  >
                    <Icon
                      name="react"
                      type="MaterialCommunityIcon"
                      color={colors.secondary}
                      size={25}
                    />
                    <Typography
                      type="Poppins_300Light"
                      style={{
                        marginLeft: 5,
                        color: colors.black,
                      }}
                    >
                      Powered by React Native Web
                    </Typography>
                  </View>
                </Animated.View>
              </View>
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>
    </Animated.View>
  );
}

const StyleSheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    padding: 30,
    paddingHorizontal: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eaeaeaaa",
  },
  headerMobileContainer: {
    padding: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eaeaeaaa",
  },
  textHeader: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    marginRight: 20,
  },
  imgIcon: {
    height: 33,
    width: 60,
    resizeMode: "cover",
    marginRight: 16,
  },
});
