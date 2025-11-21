import { Linking, Text, TouchableOpacity, View } from "react-native";
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
import { Stack, useRouter } from "expo-router";
import webApi from "@/shared/lib/webApi";
import Typography from "@/shared/ui/Typography";
import Animated, {
  SlideInLeft,
  SlideOutLeft,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Icon from "@/shared/ui/Icon";
import useCopyToClipboard from "@/shared/lib/copyToClipboard";
import { ActivityIndicator } from "react-native-web";

interface IDemoFeat {
  snack: {
    url: string;
    preferedDevice?: "web" | "android" | "ios";
  };
  liveComponent: React.JSX.Element;
  title: string;
  npm: string;
  github: string;
}

const DemoFeat = ({ liveComponent, snack, title, npm, github }: IDemoFeat) => {
  const { styles, breakpoint } = useStyles(StyleSheet);
  const [fakeAhLoad, setFakeAhLoad] = useState(true);
  const { fontReady } = useFontReady();
  const router = useRouter();
  const [mode, setMode] = useState<"live" | "snack">("snack");
  const { RenderClipboard, copyToClipboard } = useCopyToClipboard();

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
      doc.title = title;
    }
    //because JS not ready yet
    setTimeout(() => {
      setFakeAhLoad(false);
    }, 0);
  }, [title]);

  const goToGithub = useCallback(() => {
    Linking.openURL(github);
  }, [github]);

  const EmbeddedSnack = useCallback(() => {
    return (
      <div style={{ flex: 1 }}>
        <iframe
          src={`${snack.url}?platform=${snack.preferedDevice ?? "ios"}`}
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
  }, [snack]);

  if (!fontReady || fakeAhLoad) {
    return (
      <>
        <Stack.Screen options={{ title, headerShown: false }} />
        <View
          style={[
            styles.container,
            {
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <ActivityIndicator size={"large"} animating color={colors.primary} />
        </View>
      </>
    );
  }

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
            case "react-native-reanimated-confetti":
              router.navigate("/demo/react-native-reanimated-confetti");
              break;
            default:
              router.navigate("/");
              break;
          }
        }}
      />
      <View style={styles.wrapper}>
        <View
          style={[
            { flexDirection: "row", gap: 10, alignItems: "center" },
            styles.ph,
          ]}
        >
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

        <View
          style={[
            styles.ph,
            {
              marginVertical: 20,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Typography type="Poppins_600SemiBold" style={{ fontSize: 16 }}>
              Installation
            </Typography>
            <TouchableOpacity onPress={goToGithub}>
              <Icon
                name="link"
                size={14}
                color={colors.primary}
                type="FontAwesome6"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.npmContainer}>
            <Typography
              type="Poppins_300Light"
              style={{ fontSize: 12, color: colors.grey }}
            >
              npm install {npm}
            </Typography>
            <TouchableOpacity
              onPress={() => copyToClipboard(`npm install ${npm}`)}
            >
              <Icon
                name="copy-outline"
                size={16}
                color={colors.grey}
                type="Ionicons"
              />
            </TouchableOpacity>
          </View>
          {isMobile && (
            <Animated.View entering={SlideInLeft} exiting={SlideOutLeft}>
              <Typography
                style={{ fontSize: 8, color: colors.black, marginTop: 20 }}
              >
                (mobile view embedding may not supported, use the live option or
                open in expo app)
              </Typography>
            </Animated.View>
          )}
        </View>

        <Activity name="live" mode={mode === "live" ? "visible" : "hidden"}>
          {liveComponent}
        </Activity>
        <Activity name="snack" mode={mode === "snack" ? "visible" : "hidden"}>
          <EmbeddedSnack />
        </Activity>
      </View>
      <RenderClipboard />
    </View>
  );
};

export default DemoFeat;

const StyleSheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 3000,
  },
  wrapper: {
    flex: 1,
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
  ph: {
    paddingHorizontal: {
      lg: 60,
      md: 40,
      xs: 20,
      sm: 20,
      xl: 60,
    },
  },
  npmContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.black,
    maxWidth: 300,
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});

// ("overflow:hidden;background:#fbfcfd;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%");
