import { Pressable, StyleSheet, Text, View } from "react-native";

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
        <NavItem title="Home" route="home" />
        <NavItem title="Order" route="order" />
        <NavItem title="Cart" route="cart" />
        <NavItem title="Delivery" route="delivery" />
        <NavItem title="Notifications" route="notifications" />
      </View>
    </View>
  );
}
function NavItem({ title, route }: { title: string; route: string }) {
  return (
    <Pressable
      style={styles.navItem}
      onPress={() => alert(`Navigate to ${route}`)}
    >
      <Text style={styles.navText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f2",
  },

  bottomNav: {
    height: 75,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 22,
  },

  navText: {
    fontSize: 11,
    marginTop: 4,
  },
});
