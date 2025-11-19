import { useCallback, useState } from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SherlockFeat() {
  const [_, setText] = useState("");

  const searchUser = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sherlock-JS</Text>
      <TextInput
        placeholder="username"
        style={styles.input}
        onChangeText={setText}
        inputMode="text"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.btnSearch}
        onPress={searchUser}
        disabled={Platform.OS === "web"}
      >
        <Text style={{ color: "#fff" }}>{"Search"}</Text>
      </TouchableOpacity>
      <View style={styles.webContainer}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Sorry, sherlock-js currently only supported on server-side and react
          native
        </Text>
        <Text style={{ fontSize: 12, marginTop: 20 }}>
          sherlock-js on web browser is not supported due to cors issue, (we
          will add parameters to implement proxy on web soon)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 60,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  },
  textClaimed: {
    color: "green",
  },
  textOther: {
    color: "red",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eaeaeaaa",
    borderRadius: 5,
    marginTop: 20,
  },
  btnSearch: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 5,
    borderRadius: 5,
  },
  box: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eaeaeaaa",
    marginTop: 10,
  },
  title: { fontWeight: "600", fontSize: 18, marginTop: 20 },
  time: { fontSize: 12, marginTop: 5 },
  webContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
  },
});
