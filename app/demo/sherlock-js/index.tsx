import React from "react";
import DemoFeat from "@/features/demo/DemoFeat";
import SherlockFeat from "@/features/demo/Sherlock";

const Sherlock = () => {
  return (
    <DemoFeat
      liveComponent={<SherlockFeat />}
      snack={{
        url: "https://snack.expo.dev/@ilyasyusuf01/sherlock-js",
        preferedDevice: "ios",
      }}
      title="sherlock-js"
      npm="@ilyasuperglue/sherlock-js"
      github="https://github.com/ilyaSuperGlue/sherlock-js"
    />
  );
};

export default Sherlock;
