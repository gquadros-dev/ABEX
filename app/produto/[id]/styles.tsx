import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16, // Espaçamento entre os ícones
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    marginTop: -20,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff", // Fundo para não ficar transparente
  },
  cartButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
