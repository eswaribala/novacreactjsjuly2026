//creat header component with toggle menu logo notification and profile icon with react native and expo router

import { View, Text, StyleSheet } from "react-native";


function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}>Menu</Text>
        <Text style={styles.menuItem}>Notification</Text>
        <Text style={styles.menuItem}>Profile</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    marginLeft: 10,
  },
});

export default Header;