import {
  Button,
  Easing,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  Activity,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { colors } from "@/shared/constant/colors";
import Header from "@/shared/ui/Header";
import useFontReady from "@/shared/lib/useFontReady";
import { useRouter } from "expo-router";
import webApi from "@/shared/lib/webApi";
import Typography from "@/shared/ui/Typography";
import Animated, {
  SlideInLeft,
  SlideOutLeft,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
Text;

import SherlockFeat from "@/features/demo/Sherlock";

const Index = () => {
  const { styles, breakpoint } = useStyles(StyleSheet);
  useFontReady();
  const router = useRouter();
  const [mode, setMode] = useState<"live" | "snack">("snack");

  const animatedSnack = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            mode === "snack"
              ? withSpring(1.3, {
                  duration: 100,
                  mass: 0,
                  velocity: 10,
                })
              : withTiming(1),
        },
        {
          translateX: mode === "snack" ? withTiming(10) : withTiming(20),
        },
      ],
    };
  });

  const animatedLive = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            mode === "live"
              ? withSpring(1.3, {
                  duration: 100,
                  mass: 0,
                  velocity: 10,
                })
              : withTiming(1),
        },
        {
          translateX: mode === "live" ? withTiming(10) : withTiming(0),
        },
      ],
    };
  });

  const isMobile = useMemo(
    () => breakpoint === "xs" || breakpoint === "sm",
    [breakpoint]
  );

  useEffect(() => {
    const doc = webApi();
    if (doc) {
      doc.title = "sherlock-js";
    }
  }, []);

  const EmbeddedSnack = useCallback(() => {
    return (
      <div style={{ flex: 1 }}>
        <iframe
          src={"https://snack.expo.dev/@ilyasyusuf01/sherlock-js?platform=ios"}
          style={{
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "5px",
            overflow: "hidden",
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header
        data={["sherlock-js", "react-native-reanimated-confetti"]}
        type="parent"
        onPress={(page) => {
          switch (page) {
            case "sherlock-js":
              router.navigate("/demo/sherlock-js");
              break;
            default:
              router.navigate("/");
              break;
          }
        }}
      />
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Animated.View style={animatedLive}>
            <TouchableOpacity onPress={() => setMode("live")}>
              <Typography style={[styles.text(mode === "live")]}>
                Live
              </Typography>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={animatedSnack}>
            <TouchableOpacity onPress={() => setMode("snack")}>
              <Typography style={styles.text(mode === "snack")}>
                Snack
              </Typography>
            </TouchableOpacity>
          </Animated.View>
        </View>
        {isMobile && (
          <Animated.View entering={SlideInLeft} exiting={SlideOutLeft}>
            <Typography
              style={{ fontSize: 10, color: colors.black, marginTop: 10 }}
            >
              mobile view embedding may not supported, use the live options or
              open in expo app
            </Typography>
          </Animated.View>
        )}
        <Activity name="live" mode={mode === "live" ? "visible" : "hidden"}>
          <SherlockFeat />
        </Activity>
        <Activity name="snack" mode={mode === "snack" ? "visible" : "hidden"}>
          <View style={{ marginTop: 20, flex: 1 }}>
            <EmbeddedSnack />
          </View>
        </Activity>
      </View>
    </View>
  );
};

export default Index;

const StyleSheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: {
      lg: 60,
      md: 40,
      xs: 20,
      sm: 20,
      xl: 60,
    },
    marginTop: 20,
    paddingBottom: {
      lg: 60,
      md: 40,
      xs: 20,
      sm: 20,
      xl: 60,
    },
  },
  text: (active: boolean) => ({
    fontWeight: "600",
    letterSpacing: 1.5,
    color: active ? colors.primary : colors.black,
  }),
});

// ("overflow:hidden;background:#fbfcfd;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%");
