import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text, useWindowDimensions, View
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

import { products } from "../data/products";

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const addToCart = (productName: string, productPrice: number) => {
    console.log(`Added ${productName} to cart for ₹${productPrice}`);
  };

  const cardWidth = width < 600 ? "100%" : width < 900 ? "48%" : "31.5%";

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.productGrid}>
            {products.map((product) => (
              <View
                key={product.id}
                style={[
                  styles.card,
                  {
                    width: cardWidth,
                  },
                ]}
              >
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={styles.productImage}
                />

                <View style={styles.cardContent}>
                  <Text style={styles.productTitle}>{product.name}</Text>

                  <Text style={styles.description} numberOfLines={2}>
                    {product.description}
                  </Text>

                  <Text style={styles.price}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </Text>

                  <Pressable
                    style={({ pressed }) => [
                      styles.cartButton,
                      pressed && styles.cartButtonPressed,
                    ]}
                    onPress={() => addToCart(product.name, product.price)}
                  >
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  safeArea: {
    flex: 1,
    width: "100%",
    maxWidth: MaxContentWidth,
    paddingBottom: BottomTabInset + Spacing.three,
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 50,
  },

  productGrid: {
    width: "100%",

    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "flex-start",

    gap: 16,
  },

  card: {
    backgroundColor: "#ffffff",

    borderRadius: 18,
    overflow: "hidden",

    shadowColor: "#000000",

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

    marginBottom: 6,
  },

  description: {
    fontSize: 14,

    color: "#6b7280",

    lineHeight: 20,

    minHeight: 40,

    marginBottom: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",

    color: "#7c3aed",

    marginBottom: 16,
  },

  cartButton: {
    width: "100%",

    backgroundColor: "#7c3aed",

    paddingVertical: 13,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  cartButtonPressed: {
    opacity: 0.8,
  },

  cartButtonText: {
    color: "#ffffff",

    fontSize: 16,
    fontWeight: "700",
  },
});
