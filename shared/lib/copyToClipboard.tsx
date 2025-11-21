import * as Clipboard from "expo-clipboard";
import { useCallback, useEffect, useEffectEvent, useState } from "react";
import { Alert, Platform } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Typography from "../ui/Typography";
import { colors } from "../constant/colors";
import dayjs from "dayjs";

const copy = async (text: string) => {
  const res = await Clipboard.setStringAsync(text);
  return res;
};

const useCopyToClipboard = () => {
  const [text, setText] = useState("");
  const [trigger, setTrigger] = useState<number>();
  const y = useSharedValue(-100);
  const animStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(y.value, [-20, 0], [0, 1]),
      transform: [
        {
          translateY: y.value,
        },
      ],
    };
  });

  const copyToClipboard = useCallback(
    async (value: string) => {
      const isCopied = await copy(value);
      if (isCopied) {
        setText(value);
        setTrigger(dayjs().unix());
      }
    },
    [setTrigger, y]
  );

  const event = useEffectEvent(() => {
    y.value = withDelay(
      100,
      withSequence(
        withSpring(0, {
          duration: 1000,
          velocity: 2000,
          mass: 5,
          overshootClamping: false,
        }),
        withSpring(-100, {
          duration: 1000,
        })
      )
    );
  });

  useEffect(() => {
    if (trigger) {
      event();
      setTimeout(() => {
        setTrigger(undefined);
      }, 3000);
    }
  }, [trigger]);

  const RenderClipboard = useCallback(() => {
    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 20,
            right: 20,
            padding: 5,
            backgroundColor: colors.black,
            borderRadius: 8,
            paddingHorizontal: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          animStyle,
        ]}
      >
        <Typography
          type="Poppins_300Light"
          style={{ color: colors.white, fontSize: 12 }}
        >
          Text copied!
        </Typography>
      </Animated.View>
    );
  }, [animStyle]);

  return { RenderClipboard, copyToClipboard };
};

export default useCopyToClipboard;
