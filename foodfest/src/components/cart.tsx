import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useCart } from "@/context/cart-context";
import { useRouter } from "expo-router";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const getPrice = (price: string) => {
    return Number(price.replace("₹", "").trim());
  };

  const total = cartItems.reduce(
    (sum, item) => sum + getPrice(item.price) * item.quantity,
    0,
  );
  const router = useRouter();
  const handlePlaceOrder = () => {
    // Implement your order placement logic here
    console.log("Placing order with items:", cartItems);
    console.log("Total amount:", total);
    router.push({
  pathname: "/order",
  params: {
    cartItems: JSON.stringify(cartItems),
    total: total.toString(),
  },
});
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛒</Text>

          <Text style={styles.emptyTitle}>Your cart is empty</Text>

          <Text style={styles.emptyText}>
            Add some delicious briyani from the menu.
          </Text>
        </View>
      ) : (
        <>
          {cartItems.map((item) => {
            const itemTotal = getPrice(item.price) * item.quantity;

            return (
              <View key={item.title} style={styles.card}>
                <View style={styles.itemInfo}>
                  <Text style={styles.title}>{item.title}</Text>

                  <Text style={styles.price}>{item.price}</Text>

                  <Text style={styles.subtotal}>Subtotal: ₹{itemTotal}</Text>
                </View>

                <View style={styles.quantityContainer}>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => removeFromCart(item.title)}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </Pressable>

                  <Text style={styles.quantityText}>{item.quantity}</Text>

                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => addToCart(item.title, item.price)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}

          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Items</Text>

              <Text style={styles.summaryValue}>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>

              <Text style={styles.totalAmount}>₹{total}</Text>
            </View>
          </View>

          <Pressable
            style={styles.orderButton}
            onPress={() => {
              handlePlaceOrder();
            }}
          >
            <Text style={styles.orderButtonText}>Place Order</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf5",
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: 20,
  },

  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1f2937",
  },

  emptyText: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#f3f4f6",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  itemInfo: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#c2410c",
    marginTop: 5,
  },

  subtotal: {
    marginTop: 5,
    fontSize: 14,
    color: "#6b7280",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ea580c",
    borderRadius: 10,
    overflow: "hidden",
  },

  quantityButton: {
    width: 38,
    height: 38,
    backgroundColor: "#ea580c",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },

  quantityText: {
    width: 40,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
    color: "#c2410c",
  },

  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginTop: 10,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  summaryLabel: {
    fontSize: 16,
    color: "#6b7280",
  },

  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1f2937",
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1f2937",
  },

  totalAmount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#c2410c",
  },

  orderButton: {
    backgroundColor: "#ea580c",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 18,
  },

  orderButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
  },
});
