import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Footer } from "./footer";
import Header from "./header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppTabs() {
  return (
   <SafeAreaView style={styles.safeArea}> 
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Slot />
      </View>

      <Footer />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fffaf5",
  },
});
