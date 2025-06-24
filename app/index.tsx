import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/navbar";
import { Produto } from "@/classes/produto";
import { useEffect, useState } from "react";
import Badge from "@/components/badge";
import Styles from "./styles";
import { MOCK_PRODUTOS } from "@/mock/produtos";
import { Link } from "expo-router";
import SearchBar from "@/components/searchBar";

export default function Index() {
  const { width } = useWindowDimensions();
  const numCols = 2;
  const percentage = 100 / numCols - 2;
  const productWidth = width * (percentage / 100);

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getProdutos = async (): Promise<Produto[]> => {
    // try {
    //   const response = await fetch("https://localhost/api/produtos");
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   console.error("Failed to fetch produtos:", error);
    //   return [];
    // }

    // Simula um pequeno delay, como se fosse uma chamada de rede real
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MOCK_PRODUTOS);
      }, 2000);
    });
  }

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Pesquisar no Garimpo Online"
      />
      <ScrollView
        contentContainerStyle={[
          Styles.container,
          { paddingBottom: 80 },
        ]}
      >
        {loading ? (
          // Enquanto carrega os produtos, mostra um indicador
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 300 }}>
            <ActivityIndicator size="large" color="#7B42F6" />
          </View>
        ) : (
          produtos.map((produto) => (
            <Link
              key={`link-${produto.id}`}
              href={{
                pathname: "/produto/[id]",
                params: { id: produto.id },
              }}
              asChild
            >
              <TouchableOpacity>
                <View
                  style={[
                    Styles.produto,
                    { width: productWidth }
                  ]}
                >
                  <Image
                    source={{ uri: produto.fotoPath || "" }}
                    style={Styles.productImage}
                  />
                  <View style={Styles.productDescription}>
                    <View style={{ flexDirection: "row", gap: 4 }}>
                      {produto.disponibilidade === "Esgotado" ? (
                        <Badge label="Esgotado" color="#E53E3E" />
                      ):(
                        <>
                          <Badge label="Sale" />
                          <Badge label="Choice" color="#cedb37" />
                        </>
                      )}
                    </View>
                    <View>
                      <Text style={{}}>{produto.nome}</Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 16}}>R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        )}
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}
