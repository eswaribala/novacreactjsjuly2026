import { StyleSheet, Text, View } from "react-native";

export default Header;
function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color: "navy", fontSize: 32 }}>Khader Briyani</Text>
      <Text style={{ color: "navy", fontSize: 16 }}>
        Food Fest Open in Chennai Now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginLeft: "25%",
    marginRight: "auto",
  },
});
