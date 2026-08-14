import { useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payment() {
  const pathname = usePathname();

  const params = useLocalSearchParams();
  const cartItems = params.cartItems;
  const total = params.total;

  const [form, setForm] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(form);
  };

  //payment logic here
  //create card details form and handle payment submission

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Card Payment Details</Text>

            <Text style={styles.subtitle}>
              Please enter card information below
            </Text>

            {/* Name */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Card Number <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your card number"
                placeholderTextColor="#9CA3AF"
                value={form.cardNumber}
                onChangeText={(value) => handleChange("cardNumber", value)}
              />
            </View>

            {/* Email */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Card Holder Name <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter card holder name"
                placeholderTextColor="#9CA3AF"
                value={form.cardHolderName}
                onChangeText={(value) => handleChange("cardHolderName", value)}
              />
            </View>

            {/* Expiry Date */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Expiry Date <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                placeholderTextColor="#9CA3AF"
                value={form.expiryDate}
                onChangeText={(value) => handleChange("expiryDate", value)}
              />
            </View>

            {/* CVV */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                CVV <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter CVV"
                placeholderTextColor="#9CA3AF"
                keyboardType="number-pad"
                maxLength={4}
                value={form.cvv}
                onChangeText={(value) => handleChange("cvv", value)}
              />
            </View>

            {/* Submit */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#fffaf5",
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: "#e7f1f0",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 3,
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
});
