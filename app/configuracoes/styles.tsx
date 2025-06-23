import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB", // Um fundo levemente acinzentado
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
