import Badge from "@/components/badge";
import Navbar from "@/components/navbar";
import { Image, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";

import { Produto } from "@/classes/produto";

import { useEffect, useState } from "react";

export default function Index() {
  const { width } = useWindowDimensions();

  const isWeb = width > 768;
  const numCols = isWeb ? 6 : 2;

  const percentage = 100 / numCols - 4;
  const productWidth = width * (percentage / 100) - 8;


  const getProdutos = async () => {
    try {
      const response = await fetch("https://localhost/api/produtos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch produtos:", error);
      return [];
    }
  }

  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    getProdutos().then(data => setProdutos(data));
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView contentContainerStyle={Styles.container}>
        {produtos.map((produto) => (
          <View key={produto.id} style={[Styles.produto, { width: productWidth }]}>
            <Image
              source={{ uri: produto.fotoPath || "" }}
              style={Styles.productImage}
            />
            <View style={Styles.productDescription}>
              <Badge label="Sale" />
              <Badge label="Choice" color="#cedb37" />
              <Text style={{}}>{produto.nome}</Text>
              <Text style={{ fontWeight: 'bold'}}>R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</Text>
            </View>
          </View>
        ))}
        <Navbar />
      </ScrollView>
    </SafeAreaView>
  );
}
