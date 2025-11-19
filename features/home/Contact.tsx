import { Linking, TextInput, View } from "react-native";
import React, { useState } from "react";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import { colors } from "@/shared/constant/colors";
import Typography from "@/shared/ui/Typography";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Button from "@/shared/ui/Button";
import { link } from "@/shared/constant/link";
import Icon from "@/shared/ui/Icon";

const Contact = () => {
  const { styles } = useStyles(StyleSheet);
  const [{ message, subject }, setMail] = useState({
    subject: "",
    message: "",
  });
  return (
    <View style={styles.container}>
      <View style={styles.sectionRow}>
        <Animated.View
          style={styles.row}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_700Bold" style={styles.title}>
            Get in touch with me
          </Typography>
          <Typography type="Poppins_500Medium" style={[styles.textSection]}>
            I am Available for Freelance or Fulltime Positions.
          </Typography>
          <Typography type="Poppins_500Medium" style={[styles.textSection]}>
            You can contact me via :
          </Typography>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              withIcon
              iconProps={{
                name: "logo-linkedin",
                color: colors.black,
              }}
              text="LinkedIn"
              style={styles.btnLinkedin}
              textProps={{
                style: styles.btnText,
                type: "Poppins_700Bold",
              }}
              onPress={() =>
                Linking.openURL(
                  "https://linkedin.com/in/ilyas-abdurahman-yusuf"
                )
              }
            />
            <Button
              withIcon
              iconProps={{
                name: "email-outline",
                color: colors.black,
                type: "MaterialCommunityIcon",
              }}
              text="Email"
              style={styles.btnLinkedin}
              textProps={{
                style: styles.btnText,
                type: "Poppins_700Bold",
              }}
              onPress={() => {
                Linking.openURL(
                  "mailto:ilyasabdurahmanyusuf@gmail.com?subject=" +
                    subject +
                    "&body=" +
                    message
                );
              }}
            />

            <Button
              withIcon
              iconProps={{
                name: "file-search",
                color: colors.black,
                type: "AntDesign",
              }}
              text="Checkout My CV"
              style={[styles.btnLinkedin]}
              textProps={{
                style: styles.btnText,
                type: "Poppins_700Bold",
              }}
              onPress={() => Linking.openURL(link.cv)}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={styles.row}
          entering={LightSpeedInLeft.delay(100)}
        >
          <Typography type="Poppins_700Bold" style={styles.title}>
            Send Me a Message
          </Typography>
          <View>
            <Typography type="Poppins_600SemiBold" style={styles.textLabel}>
              Subject
            </Typography>
            <TextInput
              style={styles.textInput}
              onChangeText={(subject) => {
                setMail((prev) => ({ ...prev, subject }));
              }}
            />
            <Typography type="Poppins_600SemiBold" style={styles.textLabel}>
              Message
            </Typography>
            <TextInput
              style={styles.textInputArea}
              multiline
              onChangeText={(message) => {
                setMail((prev) => ({ ...prev, message }));
              }}
            />
            <Button
              text="Send Message"
              style={{ width: null }}
              onPress={() =>
                Linking.openURL(
                  "mailto:ilyasabdurahmanyusuf@gmail.com?subject=" +
                    subject +
                    "&body=" +
                    message
                )
              }
            />
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
    alignItems: "center",
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
    textAlign: "center",
    marginBottom: 5,
  },
  btnLinkedin: {
    marginRight: {
      xs: 5,
      sm: 28,
    },
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#999999aa",
    marginTop: {
      xs: 10,
      sm: 20,
    },
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: {
      xs: "100%",
      md: "48%",
    },
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
    borderWidth: 1,
    borderColor: "#eaeaeaaa",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 20,
    minWidth: {
      xs: 250,
      sm: 500,
    },
  },
  textInputArea: {
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eaeaeaaa",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 20,
    minHeight: 200,
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
  },
  btnText: {
    color: colors.black,
    fontWeight: "700",
    letterSpacing: 1.2,
    fontSize: 20,
  },
}));
