import { FlatList, Linking, Pressable, TextInput, View } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import Animated, { LightSpeedInLeft, measure } from "react-native-reanimated";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Button from "@/shared/ui/Button";
import { link } from "@/shared/constant/link";
import Icon from "@/shared/ui/Icon";
import { contactBtn } from "./constant/const-contant";

const Contact = () => {
  const { styles } = useStyles(StyleSheet);
  const [{ message, subject }, setMail] = useState({
    subject: "",
    message: "",
  });

  const clear = useCallback(() => {
    setMail({
      subject: "",
      message: "",
    });
  }, []);

  const isDisabled = useMemo(
    () => subject.length <= 0 || message.length <= 0,
    [message, subject],
  );

  return (
    <View style={styles.container}>
      <View style={styles.sectionRow}>
        <Animated.View
          style={styles.row}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_700Bold" style={styles.title}>
            Get in touch
          </Typography>
          <Typography type="Poppins_500Medium" style={[styles.textSection]}>
            I am Available for Freelance or Fulltime opportunities.
          </Typography>
          <Typography type="Poppins_500Medium" style={[styles.textSection]}>
            Feels free ro reach out
          </Typography>

          <FlatList
            data={contactBtn}
            renderItem={({ item }) => {
              return (
                <Button
                  key={item.icon}
                  withIcon
                  iconProps={{
                    name: item.icon,
                    color: colors.primary,
                    type: item.type,
                  }}
                  text={item.text}
                  style={styles.btnLinkedin}
                  textProps={{
                    style: styles.btnText,
                    type: "Poppins_700Bold",
                  }}
                  onPress={() => {
                    const params = [];
                    if (item.text === "Email") {
                      params.push(subject, message);
                    }
                    item.onPress(...params);
                  }}
                />
              );
            }}
            scrollEnabled={false}
          />
        </Animated.View>
        <Animated.View
          style={styles.row}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_700Bold" style={styles.title}>
            Send Me a Message
          </Typography>
          <View style={styles.mailBox}>
            <View style={styles.mailHeader}>
              <Icon
                type={"Ionicons"}
                name={"mail-outline"}
                size={20}
                color={colors.white}
              />
              <Typography
                type="Poppins_400Regular"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: colors.white,
                }}
              >
                New message
              </Typography>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(subject) => {
                  setMail((prev) => ({ ...prev, subject }));
                }}
                placeholder="Subject"
                placeholderTextColor={colors.black + "aa"}
                value={subject}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInputArea}
                multiline
                onChangeText={(message) => {
                  setMail((prev) => ({ ...prev, message }));
                }}
                placeholder="Body"
                placeholderTextColor={colors.black + "aa"}
                value={message}
              />
            </View>
            <View style={[styles.mailHeader, styles.mailFooter]}>
              <Pressable onPress={clear}>
                <Icon name="delete" color={colors.white} size={25} />
              </Pressable>
              <Button
                disabled={isDisabled}
                withIcon
                iconProps={{
                  name: "send-sharp",
                  color: isDisabled ? "#eaeaeaaa" : colors.white,
                  size: 20,
                }}
                text="Send"
                style={{
                  width: null,
                  backgroundColor: "transparent",

                  borderColor: isDisabled ? colors.black : colors.white,
                }}
                onPress={() => {
                  if (!isDisabled) {
                    Linking.openURL(
                      "mailto:ilyasabdurahmanyusuf@gmail.com?subject=" +
                        subject +
                        "&body=" +
                        message,
                    );
                  }
                }}
                textProps={{
                  style: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: isDisabled ? "#eaeaeaaa" : colors.white,
                  },
                }}
              />
            </View>
          </View>
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
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
          style={{ marginLeft: 5, color: colors.black }}
        >
          Powered by React Native Web
        </Typography>
      </View>
    </View>
  );
};

export default Contact;

const StyleSheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: "center",
    marginTop: {
      md: 0,
      lg: 50,
    },
  },
  row: {
    flex: 1,
    minWidth: {
      xs: "100%",
      lg: 992 / 2,
      xl: 1200 / 2,
      superLarge: 2000,
      tvLike: 4000,
    },
    marginBottom: {
      xs: 30,
      sm: 100,
    },
    justifyContent: "flex-start",
  },
  sectionRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: {
      xs: 0,
      sm: 20,
    },
  },
  textSection: {
    fontSize: {
      xs: 14,
      sm: 20,
    },
    lineHeight: {
      xs: 24,
      sm: 30,
    },
    color: colors.black,
    marginBottom: 5,
  },
  btnLinkedin: {
    backgroundColor: colors.white,
    marginTop: {
      xs: 10,
      sm: 20,
    },
    alignItems: "center",
    justifyContent: "flex-start",
    width: {
      xs: "100%",
      md: "38%",
    },
    padding: 0,
    marginBottom: 0,
  },
  textLabel: {
    fontSize: {
      xs: 16,
      sm: 20,
    },
    marginBottom: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textInputArea: {
    padding: 10,
    backgroundColor: "#fff",
    minHeight: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnCV: {
    width: {
      xs: "100%",
      lg: 410,
      xl: 410,
      superLarge: 410,
      tvLike: 410,
    },
  },
  title: {
    fontSize: {
      xs: 22,
      md: 30,
    },
    color: colors.black,
    marginBottom: {
      xs: 10,
      sm: 30,
    },
    textAlign: "left",
  },
  btnText: {
    color: colors.primary,
    fontWeight: "700",
    letterSpacing: 1.2,
    fontSize: 20,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: colors.black,
    padding: 10,
    paddingHorizontal: 15,
  },
  mailHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 20,
  },
  mailFooter: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
  },
  mailBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.black,
    borderTopWidth: 0,
    borderRadius: 22,
    backgroundColor: "#eaeaea",
  },
}));
