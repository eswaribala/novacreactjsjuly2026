import * as Device from "expo-device";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { ScrollView } from "react-native";
import { products } from "../data/products";
function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

//show products in a list with image title and price and description and add to cart button with react native and expo router
export default function HomeScreen() {
  const addToCart = (productName: string, productPrice: number) => {
    console.log(`Added ${productName} to cart for $${productPrice}`);
  };
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 15,
            paddingBottom: 50,
          }}
        >
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />

              <View style={styles.cardContent}>
                <Text style={styles.productTitle}>{product.name}</Text>

                <Text style={styles.description}>{product.description}</Text>

                <Text style={styles.price}>₹{product.price}</Text>

                <Pressable
                  style={styles.cartButton}
                  onPress={() => addToCart(product.name, product.price)}
                >
                  <Text style={styles.cartButtonText}>Add to Cart</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

function Card({ product }: { product: (typeof products)[number] }) {
  return (
    <View style={styles.card}>
      <ThemedText>{product.id}</ThemedText>
      <ThemedText>{product.name}</ThemedText>
      <ThemedText>{product.description}</ThemedText>
      <ThemedText>Price: ${product.price}</ThemedText>
      <View style={{ width: 200, height: 200, backgroundColor: "lightgray" }}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.button}>
        <ThemedText>Add to Cart</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 8,
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  productContainer: {
    marginBottom: Spacing.four,
  },

  button: {
    marginTop: Spacing.two,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    marginHorizontal: 16,
    marginVertical: 10,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 5,
  },

  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  cardContent: {
    padding: 16,
  },

  productId: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#7c3aed",
    marginBottom: 16,
  },

  cartButton: {
    backgroundColor: "#7c3aed",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
  },

  cartButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
