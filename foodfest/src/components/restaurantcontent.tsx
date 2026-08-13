import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
//Restautant menu content
function RestaurantContent() {
  return (
    <ScrollView style={styles.content}>
      <Card
        title="Mutton Briyani"
        description="Hyderabadi style mutton briyani with aromatic spices and tender meat."
      />

      <Card
        title="Chicken Briyani"
        description="Delicious chicken briyani cooked with fragrant basmati rice and spices."
      />

      <Card
        title="Veg Briyani"
        description="Aromatic vegetable briyani with a mix of fresh vegetables and spices."
      />
    </ScrollView>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.imageBox}>
        <Text style={styles.image}>🖼️</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f2",
  },

  header: {
    height: 70,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  icon: {
    fontSize: 24,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  contentTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "green",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },

  imageBox: {
    width: 75,
    height: 75,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  image: {
    fontSize: 30,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#555555",
  },

  bottomNav: {
    height: 75,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
});

export default RestaurantContent;
