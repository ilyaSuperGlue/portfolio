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
  SequencedTransition,
  SlideInLeft,
  SlideOutLeft,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
Text;

import sherlock, {
  sites,
  TSiteKey,
  SHERLOCK_STATUS,
} from "@ilyasuperglue/sherlock-js";

const keys = Object.keys(sites) as TSiteKey[];

const SherlockRender = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<
    {
      url: string;
      username: string;
      status: SHERLOCK_STATUS;
    }[]
  >([]);

  const searchUser = useCallback((username: string) => {
    sherlock({
      username,
      timeout_each: 1000,
      callback_each: (item) => {
        if (item.status === "CLAIMED") {
          setData((prev) => [
            ...prev,
            {
              status: item.status,
              url: item.url,
              username,
            },
          ]);
        }
      },
      type: "ALL",
    });
  }, []);
  return (
    <View>
      <Text style={{ fontWeight: "600", fontSize: 20, marginVertical: 10 }}>
        sherlock-js
      </Text>

      <View style={{ flexDirection: "row", gap: 8, marginTop: 10 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="username"
          placeholderTextColor={"#999"}
          style={{
            borderWidth: 2,
            padding: 5,
            borderColor: "#eaeaeaaa",
            borderRadius: 5,
          }}
        />
        <Button
          title="search"
          color={colors.primary}
          onPress={() => searchUser(text)}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Animated.View key={item.username} layout={SequencedTransition}>
            <Typography>{item.url}</Typography>
          </Animated.View>
        )}
      />
    </View>
  );
};

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
        <Activity name="snack" mode={mode === "snack" ? "visible" : "hidden"}>
          <EmbeddedSnack />
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
