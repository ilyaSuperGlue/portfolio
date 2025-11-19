import sherlock, { SHERLOCK_STATUS, sites } from "@ilyasuperglue/sherlock-js";
import { useCallback, useState } from "react";
import {
  Linking,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const key = Object.keys(sites);
const sites_length = key.length;

interface TData {
  time: number;
  url: string;
  isNSFW?: boolean;
  status: SHERLOCK_STATUS;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState<TData[]>([]);
  const [other, setOther] = useState<TData[]>([]);

  const [text, setText] = useState("");

  const searchUser = useCallback(async (username: string) => {
    try {
      setClaimed([]);
      setOther([]);
      setLoading(true);
      await sherlock({
        username,
        type: "SFW",
        timeout_each: 1000,
        callback_each: (site) => {
          if (site.status === "CLAIMED") {
            setClaimed((prev) => [...prev, site]);
          } else {
            setOther((prev) => [...prev, site]);
          }
        },
      }).finally(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const onPressLink = useCallback((url: string) => {
    Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sherlock-JS</Text>
      <TextInput
        editable={!loading}
        placeholder="username"
        style={styles.input}
        onChangeText={setText}
        inputMode="text"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.btnSearch}
        onPress={() => searchUser(text)}
      >
        <Text style={{ color: "#fff" }}>
          {loading
            ? `Loading (${claimed.length + other.length}/${sites_length})`
            : "Search"}
        </Text>
      </TouchableOpacity>
      <SectionList
        style={{ marginTop: 20 }}
        sections={[
          {
            data: claimed,
          },
          {
            data: other,
          },
        ]}
        renderItem={({ item }) => (
          <RenderItem key={item.url} item={item} onPressLink={onPressLink} />
        )}
      />
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
});

const RenderItem = ({
  item,
  onPressLink,
}: {
  item: TData;
  onPressLink: (url: string) => void;
}) => {
  return (
    <TouchableOpacity
      key={item.url}
      disabled={item.status !== "CLAIMED"}
      onPress={() => onPressLink(item.url)}
      style={[
        styles.box,
        {
          backgroundColor: item.status === "CLAIMED" ? "#fff" : "#eaeaea",
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.text,
              item.status === "CLAIMED" ? styles.textClaimed : styles.textOther,
            ]}
          >
            {item.isNSFW ? "[NSWF] " : ""}
            {item.url}
          </Text>
          <Text style={styles.time}>{item.time} ms</Text>
        </View>
        <Text
          style={[
            styles.text,
            item.status === "CLAIMED" ? styles.textClaimed : styles.textOther,
            {
              fontWeight: "800",
            },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
