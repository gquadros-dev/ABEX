import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Produto } from '@/classes/produto';
import Styles from './styles';

type CarrosselProdutosProps = {
  produtos: Produto[];
};

const CarrosselProdutos: React.FC<CarrosselProdutosProps> = ({ produtos }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Produtos similares:</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={Styles.scrollViewContainer}
      >
        {produtos.map((produto) => (
          <View key={produto.id} style={Styles.produtoContainer}>
            <Image
              source={{ uri: produto.fotoPath || '' }}
              style={Styles.productImage}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CarrosselProdutos;
