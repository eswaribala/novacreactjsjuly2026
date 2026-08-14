import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function Footer() {
  const [activeRoute, setActiveRoute] = useState("Home");

  const getActiveRoute = (route: string) => {
    setActiveRoute(route);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
          backgroundColor: "#f8f8f8",
        }}
      >
        <NavItem
          icon="🏠"
          title="Home"
          route="Home"
          activeRoute={activeRoute}
          onNavigate={getActiveRoute}
        />
        <NavItem
          icon="🔍"
          title="Search"
          route="Search"
          activeRoute={activeRoute}
          onNavigate={getActiveRoute}
        />
        <NavItem
          icon="❤️"
          title="Favorites"
          route="Favorites"
          activeRoute={activeRoute}
          onNavigate={getActiveRoute}
        />
        <NavItem
          icon="⚙️"
          title="Settings"
          route="Settings"
          activeRoute={activeRoute}
          onNavigate={getActiveRoute}
        />
      </View>
    </>
  );
}
type NavItemProps = {
  icon: string;
  title: string;
  route: string;
  activeRoute: string;
  onNavigate: (route: string) => void;
};
function NavItem({
  icon,
  title,
  route,
  activeRoute,
  onNavigate,
}: NavItemProps) {
  const handlePress = () => {
    onNavigate(route);
  };
  return (
    <>
      <Pressable onPress={handlePress}>
        <View>
          <Text>{icon}</Text>
        </View>
        <Text>{title}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 82,
    backgroundColor: "#ffffff",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    paddingHorizontal: 10,

    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 10,
  },

  navItem: {
    flex: 1,
    height: 70,

    alignItems: "center",
    justifyContent: "center",
  },

  navItemPressed: {
    opacity: 0.7,
  },

  iconBox: {
    width: 38,
    height: 34,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 12,
  },

  activeIconBox: {
    backgroundColor: "#fff7ed",
  },

  navIcon: {
    fontSize: 21,
  },

  navText: {
    fontSize: 11,
    marginTop: 3,

    color: "#6b7280",
    fontWeight: "500",
  },

  activeNavText: {
    color: "#ea580c",
    fontWeight: "700",
  },

  activeIndicator: {
    width: 24,
    height: 3,

    backgroundColor: "#ea580c",
    borderRadius: 5,

    marginTop: 4,
  },
});
