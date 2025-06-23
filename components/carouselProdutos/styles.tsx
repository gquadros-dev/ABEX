import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#E5E7EB", // Um cinza claro
    borderRadius: 16,
    padding: 12,
    marginVertical: 10,
    overflow: "scroll",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default styles;
