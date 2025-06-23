import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text } from "react-native";

import { Produto } from "@/classes/produto";
import { MOCK_PRODUTOS } from "@/mock/produtos";

import Styles from "./styles";

// Definimos as propriedades que o nosso componente vai receber

const CarouselProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const getProdutos = async (): Promise<Produto[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(MOCK_PRODUTOS);
        }, 500);
      });
    }

    useEffect(() => {
      getProdutos().then((data) => setProdutos(data));
    }, []);

  return (
    <View style={Styles.card}>
      <Text>Produtos similares:</Text>
      <View style={Styles.cardContent}>
        {produtos.map((produto) => (
          <Image key={produto.id} source={{ uri: produto.fotoPath }} style={Styles.image} />
        ))}
      </View>
    </View>
  );
};

export default CarouselProdutos;
