import { ActivityIndicator, Dimensions, View } from "react-native";
import { colors } from "../shared/constant/colors";
import Typography from "../shared/ui/Typography";
import Header from "../shared/ui/Header";
import { SectionList } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import Main from "../features/home/Main";
import Profile from "../features/home/Profile";
import Skill from "../features/home/Skill";
import Projects from "../features/home/Projects";
const { height } = Dimensions.get("window");
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Contact from "../features/home/Contact";
import useFontReady from "../shared/lib/useFontReady";
import { Stack } from "expo-router";
import webApi from "@/shared/lib/webApi";
import OpenSourcery from "@/features/home/OpenSourcery";

//section list
const sections: iSections[] = [
  "home",
  "profile",
  "skills",
  "projects",
  "open-sourcery 🪄",
  "contact",
];
export type iSections =
  | "home"
  | "profile"
  | "skills"
  | "projects"
  | "open-sourcery 🪄"
  | "contact"
  | "sherlock-js"
  | "react-native-reanimated-confetti";

function Home() {
  const [fakeAhLoad, setFakeAhLoad] = useState(true);

  useEffect(() => {
    const doc = webApi();
    if (doc != undefined) {
      doc.title = "Ilyas Abdurahman Yusuf";
    }
    //because JS not ready yet
    setTimeout(() => {
      setFakeAhLoad(false);
    }, 0);
  }, []);

  const sectionlistRef = useRef<SectionList>(null);
  const { styles } = useStyles(StyleSheet);
  const { fontReady } = useFontReady();

  const scrollTo = useCallback((screenName: iSections) => {
    if (sectionlistRef?.current) {
      sectionlistRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex: sections.findIndex((item) => item === screenName),
        animated: true,
      });
    }
  }, []);

  if (!fontReady || fakeAhLoad) {
    return (
      <>
        <Stack.Screen
          options={{ title: "Ilyas abdurahman yusuf", headerShown: false }}
        />
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
      <Stack.Screen
        options={{ title: "Ilyas abdurahman yusuf", headerShown: false }}
      />
      <Header data={sections.slice(1, sections.length)} onPress={scrollTo} />
      <SectionList
        ref={sectionlistRef}
        style={styles.sectionContainer}
        sections={sections.map((item) => ({
          data: [item],
          title: item,
        }))}
        renderItem={({ item }: { item: iSections }) => {
          switch (item) {
            case "home":
              return <Main />;
            case "profile":
              return <Profile />;
            case "skills":
              return <Skill />;
            case "projects":
              return <Projects />;
            case "contact":
              return <Contact />;
            case "open-sourcery 🪄":
              return <OpenSourcery />;
            default:
              return (
                <View
                  style={{
                    height,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>{item}</Typography>
                </View>
              );
          }
        }}
      />
    </View>
  );
}

const StyleSheet = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: {
      lg: 60,
      md: 40,
      xs: 20,
      sm: 20,
      xl: 60,
    },
  },
});

export default Home;
