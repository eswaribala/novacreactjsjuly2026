import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from "react-native";

export default function OrderScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isDesktop = width >= 768;

  const params = useLocalSearchParams();

  // Get cart items
  const cartItems = params.cartItems
    ? JSON.parse(params.cartItems as string)
    : [];

  // Get total passed from Cart
  const total = Number(params.total ?? 0);

  const totalItems = cartItems.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    console.log("Order placed:", cartItems);
    console.log("Total:", total);

    // router.push("/order");
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Your Order</Text>
          <Text style={styles.subtitle}>
            Review your items before placing the order
          </Text>
        </View>

        {/* RIGHT SIDE */}
        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Items</Text>

            <Text style={styles.summaryValue}>{totalItems}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>

            <Text style={styles.totalValue}>₹{total}</Text>
          </View>

          <Pressable style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderText}>Place Order</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff8f3",
  },

  scrollContent: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  container: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#172033",
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
  },

  orderLayout: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 24,
  },

  mobileLayout: {
    flexDirection: "column",
  },

  itemsSection: {
    flex: 2,
    width: "100%",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 16,
  },

  itemCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 20,
    marginBottom: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#eeeeee",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 5,

    elevation: 3,
  },

  itemDetails: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172033",
  },

  price: {
    color: "#f05a0a",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 7,
  },

  subtotal: {
    color: "#6b7280",
    fontSize: 13,
    marginTop: 6,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9,
    overflow: "hidden",
  },

  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: "#f05a0a",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },

  quantityValue: {
    width: 42,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f05a0a",
  },

  quantityText: {
    fontWeight: "700",
    color: "#172033",
  },

  summaryCard: {
    flex: 1,
    minWidth: 280,
    width: "100%",

    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 22,

    borderWidth: 1,
    borderColor: "#eeeeee",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  summaryLabel: {
    color: "#6b7280",
    fontSize: 14,
  },

  summaryValue: {
    fontWeight: "700",
    color: "#172033",
  },

  divider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172033",
  },

  totalValue: {
    fontSize: 23,
    fontWeight: "800",
    color: "#d94700",
  },

  placeOrderButton: {
    backgroundColor: "#f05a0a",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  placeOrderText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
