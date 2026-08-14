//creat header component with toggle menu logo notification and profile icon with react native and expo router

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Novac Shopify</Text>
        <Text style={styles.subtitle}>Trending Collections</Text>
      </View>

      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.icon}>🔔</Text>
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 78,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,

    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },

  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#fff7ed",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  icon: {
    fontSize: 23,
  },

  titleContainer: {
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#c2410c",
  },

  subtitle: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },

  notificationBadge: {
    position: "absolute",
    right: -2,
    top: -2,

    width: 18,
    height: 18,
    borderRadius: 9,

    backgroundColor: "#dc2626",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#ffffff",
  },

  badgeText: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
  },
});

export default Header;
