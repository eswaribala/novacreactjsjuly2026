import { useCart } from "@/context/cart-context";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
type CartItem = {
  title: string;
  price: string;
  quantity: number;
};

function RestaurantContent() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const getQuantity = (title: string) => {
    const item = cartItems.find((item) => item.title === title);

    return item ? item.quantity : 0;
  };
  return (
    <ScrollView
      style={styles.content}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.contentTitle}>Our Special Briyani</Text>
        <Text style={styles.subTitle}>
          Freshly prepared with authentic spices
        </Text>
      </View>

      <Card
        title="Mutton Briyani"
        description="Hyderabadi style mutton briyani with aromatic spices and tender meat."
        price="₹280"
        rating="4.8"
        image="🍖"
        quantity={getQuantity("Mutton Briyani")}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />

      <Card
        title="Chicken Briyani"
        description="Delicious chicken briyani cooked with fragrant basmati rice and spices."
        price="₹220"
        quantity={getQuantity("Chicken Briyani")}
        onAdd={addToCart}
        rating="4.7"
        image="🍗"
        onRemove={removeFromCart}
      />

      <Card
        title="Veg Briyani"
        description="Aromatic vegetable briyani with a mix of fresh vegetables and spices."
        price="₹180"
        quantity={getQuantity("Veg Briyani")}
        onAdd={addToCart}
        rating="4.5"
        image="🥕"
        onRemove={removeFromCart}
      />
    </ScrollView>
  );
}

type CardProps = {
  title: string;
  description: string;
  price: string;
  rating: string;
  image: string;
  quantity: number;
  onAdd: (title: string, price: string) => void;
  onRemove: (title: string) => void;
};

function Card({
  title,
  description,
  price,
  rating,
  image,
  quantity,
  onAdd,
  onRemove,
}: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Text style={styles.image}>{image}</Text>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
          <Text style={styles.cardTitle}>{title}</Text>

          <View style={styles.ratingBox}>
            <Text style={styles.rating}>★ {rating}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>{price}</Text>

          {quantity === 0 ? (
            <Pressable
              style={styles.addButton}
              onPress={() => onAdd(title, price)}
            >
              <Text style={styles.addButtonText}>+ Add</Text>
            </Pressable>
          ) : (
            <View style={styles.quantityContainer}>
              <Pressable
                style={styles.quantityButton}
                onPress={() => onRemove(title)}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </Pressable>

              <Text style={styles.quantityText}>{quantity}</Text>

              <Pressable
                style={styles.quantityButton}
                onPress={() => onAdd(title, price)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fffaf5",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 30,
  },

  headingContainer: {
    marginBottom: 22,
  },

  contentTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1f2937",
  },

  subTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 5,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",

    padding: 15,
    marginBottom: 18,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#f3f4f6",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },

  imageBox: {
    width: 95,
    height: 95,

    backgroundColor: "#fff7ed",
    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 16,
  },

  image: {
    fontSize: 45,
  },

  cardContent: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
  },

  ratingBox: {
    backgroundColor: "#ecfdf5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },

  rating: {
    color: "#15803d",
    fontSize: 12,
    fontWeight: "700",
  },

  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 13,
  },

  price: {
    fontSize: 19,
    fontWeight: "800",
    color: "#c2410c",
  },

  addButton: {
    backgroundColor: "#ea580c",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 10,
  },

  addButtonPressed: {
    backgroundColor: "#c2410c",
  },

  addButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
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
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  quantityText: {
    width: 40,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#c2410c",
  },
});

export default RestaurantContent;
