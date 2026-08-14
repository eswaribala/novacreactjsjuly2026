import { paymentOptions } from "@/data/paymentoptions";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function Payment() {
  return (
    <>
      <View style={styles.paymentContainer}>
        {paymentOptions.map((option) => (
          <Pressable key={option.id} style={styles.paymentItem}>
            <Image source={{ uri: option.image }} style={styles.paymentImage} />

            <Text style={styles.paymentName}>{option.name}</Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
     flexDirection: "row",      // 👈 horizontal
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
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
  safeArea: {
    flex: 1,
    backgroundColor: "#fffaf5",
  },
  scrollContainer: {
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  required: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#1f2937",
  },
  textArea: {
    height: 100,
  },
  submitButton: {
    backgroundColor: "#c2410c",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  paymentImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  paymentItem: {
    alignItems: "center",
    marginBottom: 20,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "600",
  },
});
