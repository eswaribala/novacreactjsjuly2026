import { paymentOptions } from "@/data/paymentoptions";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function Payment() {
  const router = useRouter();
  const handlePaymentOptionSelect = (option: string) => {
    alert(`Selected payment option: ${option}`);
    // Implement payment logic based on the selected option
    if (option === "Credit Card" || option === "Debit Card") {
      // Navigate to card payment screen or show card payment form
      router.push("/carddetails");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Payment Method</Text>

      <View style={styles.paymentContainer}>
        {paymentOptions.map((option) => (
          <Pressable
            key={option.id}
            style={styles.paymentItem}
            onPress={() => {
              handlePaymentOptionSelect(option.name);
            }}
          >
            <Image
              source={{ uri: option.image }}
              style={styles.paymentImage}
              resizeMode="contain"
            />

            <Text style={styles.paymentName}>{option.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf5",
    paddingTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#172033",
  },

  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    paddingHorizontal: 20,
  },

  paymentItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    paddingVertical: 12,
  },

  paymentImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },

  paymentName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#111827",
  },
});
