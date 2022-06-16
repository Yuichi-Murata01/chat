import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SampleChat } from "./components/SampleChat";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SampleChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
