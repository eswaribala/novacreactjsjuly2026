import { useLocalSearchParams, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Payment() {
  const pathname = usePathname();

  const params = useLocalSearchParams();
  const cartItems = params.cartItems;
  const total = params.total;

  //payment logic here

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment</Text>
      <Text style={styles.subheading}>Order Summary</Text>
      <Text style={styles.text}>Cart Items: {cartItems}</Text>
      <Text style={styles.text}>Total Amount: ₹{total}</Text>
      {/* Add your payment form or button here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf5",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
