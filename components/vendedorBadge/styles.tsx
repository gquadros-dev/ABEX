import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB", // Um cinza claro
    borderRadius: 16,
    padding: 12,
    marginVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Metade da largura/altura para ser um círculo
    marginRight: 12,
  },
  infoContainer: {
    flex: 1, // Ocupa o espaço restante
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  avaliacaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  avaliacaoNota: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
  },
  descricao: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vendas: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1F2937",
  },
  verMais: {
    fontSize: 12,
    color: "#3B82F6",
    fontWeight: "500",
  },
});

export default styles;
