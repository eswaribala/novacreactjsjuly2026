import * as Device from "expo-device";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";

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
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.productGrid}>
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
      </View>
    </ScrollView>
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
  scrollContent: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingBottom: 50,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,

    // REMOVE alignItems: "center"
    // alignItems: "center",

    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    width: "100%",
  },

  // ADD THIS
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 20,
    width: "100%",
  },

  card: {
    // IMPORTANT - allows 3 cards in one row
    width: "31%",
    minWidth: 240,

    backgroundColor: "#ffffff",
    borderRadius: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,

    // REMOVE THESE
    // marginHorizontal: 16,
    // marginVertical: 10,
  },

  productImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  cardContent: {
    padding: 16,
  },

  productTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 8,
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
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
