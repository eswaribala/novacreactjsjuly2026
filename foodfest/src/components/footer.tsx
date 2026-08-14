import { router, usePathname } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { bottomMenu } from "../data/bottommenu";

export function Footer() {
  const pathname = usePathname();

  const handleNavigation = (route: string) => {
    console.log("Navigate to:", route);

    switch (route) {
      case "home":
        router.replace("/");
        break;

      case "cart":
        router.push("/cart");
        break;

      case "order":
        router.push("/order");
        break;
      case "payment":
        router.push("/payment");
        break;
      case "carddetails":
        router.push("/carddetails");
        break;
      case "delivery":
        router.push("/delivery");
        break;

      case "notifications":
        router.push("/notifications");
        break;
      case "profile":
        router.push("/profile");
        break;
      default:
        router.replace("/");
        break;
    }
  };

  const getActiveRoute = () => {
    if (pathname === "/") {
      return "home";
    }

    if (pathname === "/cart") {
      return "cart";
    }

    if (pathname === "/order") {
      return "order";
    }
    if (pathname === "/payment") {
      return "payment";
    }
    if (pathname === "/carddetails") {
      return "carddetails";
    }

    if (pathname === "/delivery") {
      return "delivery";
    }

    if (pathname === "/notifications") {
      return "notifications";
    }
    if (pathname === "/profile") {
      return "profile";
    }

    return "home";
  };

  const activeRoute = getActiveRoute();

  return (
    <View style={styles.bottomNav}>
      {bottomMenu.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          title={item.title}
          route={item.route}
          activeRoute={activeRoute}
          onNavigate={handleNavigation}
        />
      ))}
    </View>
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
  const isActive = activeRoute === route;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.navItem,
        pressed && styles.navItemPressed,
      ]}
      onPress={() => onNavigate(route)}
    >
      <View style={[styles.iconBox, isActive && styles.activeIconBox]}>
        <Text style={styles.navIcon}>{icon}</Text>
      </View>

      <Text style={[styles.navText, isActive && styles.activeNavText]}>
        {title}
      </Text>

      {isActive && <View style={styles.activeIndicator} />}
    </Pressable>
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
