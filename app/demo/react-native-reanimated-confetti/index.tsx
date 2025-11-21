import React from "react";
import DemoFeat from "@/features/demo/DemoFeat";
import ConfettiFeat from "@/features/demo/ConfettiFeat";

const Sherlock = () => {
  return (
    <DemoFeat
      liveComponent={<ConfettiFeat />}
      snack={{
        url: "https://snack.expo.dev/@ilyasyusuf01/react-native-reanimate-confetti",
        preferedDevice: "web",
      }}
      title="react-native-reanimated-confetti"
      npm="@hikaaam/react-native-reanimated-confetti"
      github="https://github.com/ilyaSuperGlue/react-native-reanimated-confetti"
    />
  );
};

export default Sherlock;
