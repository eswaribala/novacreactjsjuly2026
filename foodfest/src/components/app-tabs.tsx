import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Footer } from "./footer";
import Header from "./header";

export default function AppTabs() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Slot />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },
});
