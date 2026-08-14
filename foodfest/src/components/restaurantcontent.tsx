import { useCart } from "@/context/cart-context";
import { foodMenu } from "@/data/foodmenu";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        <Text style={styles.contentTitle}>Our Delicious Cuisine</Text>
        <Text style={styles.subTitle}>
          Freshly prepared with authentic spices
        </Text>
      </View>
      {foodMenu.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          description={item.description}
          price={`₹${item.price}`}
          rating={`${item.rating}`}
          image={item.image}
          quantity={getQuantity(item.name)}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
      ))}
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
      <View>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
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
    color: "DarkOrange",
  },

  subTitle: {
    fontSize: 14,
    color: "#80786b",
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

  image: {
    width: 75,
    height: 75,
    borderRadius: 12,
    marginRight: 16,
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
