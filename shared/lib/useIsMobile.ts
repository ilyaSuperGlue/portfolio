import { useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const useIsMobile = () => {
  const { breakpoint } = useStyles(stylesheet);
  const isMobile = useMemo(
    () => breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md",
    [breakpoint],
  );
  return { isMobile };
};

const stylesheet = createStyleSheet({});

export default useIsMobile;
