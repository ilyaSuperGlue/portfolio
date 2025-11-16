import { UnistylesRegistry } from "react-native-unistyles";
import { breakpoints } from "./breakpoint";

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// override library types
declare module "react-native-unistyles" {
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry
    .addBreakpoints(breakpoints)
    .addConfig({
        adaptiveThemes: true,
    });
