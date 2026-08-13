import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
//Restautant menu content
function RestaurantContent() {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.contentTitle}>Content Area</Text>

      <Card
        title="Card Title 1"
        description="This is a sample description for the card content."
      />

      <Card
        title="Card Title 2"
        description="This is a sample description for the card content."
      />

      <Card
        title="Card Title 3"
        description="This is a sample description for the card content."
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

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 22,
  },

  navText: {
    fontSize: 11,
    marginTop: 4,
  },
});

export default RestaurantContent;
