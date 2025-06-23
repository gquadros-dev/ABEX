import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MOCK_PRODUTOS } from "@/mock/produtos";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Styles from "./styles";
import VendedorBadge from "@/components/vendedorBadge";
import CarouselProdutos from "@/components/carouselProdutos";


export default function ProdutoDetalhe() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const produto = MOCK_PRODUTOS.find((p) => p.id.toString() === id);
  const router = useRouter();

  const [isFavorited, setIsFavorited] = useState(false);

  if (!produto) {
    return (
      <SafeAreaView style={Styles.safeArea}>
        <Text>Produto não encontrado!</Text>
      </SafeAreaView>
    );
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    Alert.alert(
      isFavorited ? "Removido dos favoritos" : "Adicionado aos favoritos!"
    );
  };

  const handleAddToCart = () => {
    Alert.alert("Adicionado!", `${produto.nome} foi adicionado ao carrinho.`);
  };

  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={Styles.container}>
          <View style={Styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Icon name="arrow-back" size={28} color="#000" />
            </TouchableOpacity>

            <View style={Styles.headerIcons}>
              <TouchableOpacity onPress={handleFavorite}>
                <Icon
                  name={isFavorited ? "favorite" : "favorite-border"}
                  size={28}
                  color={isFavorited ? "red" : "#000"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert("Compartilhar!")}>
                <Icon name="share" size={28} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <Image source={{ uri: produto.fotoPath }} style={Styles.image} />

          <View style={Styles.detailsContainer}>
            <Text style={Styles.price}>
              R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
            </Text>
            <Text style={Styles.name}>{produto.nome}</Text>
            <Text style={Styles.description}>
              Em até 2x de R$ {String(Number(produto.preco)/2).replace('.', ',')} sem juros.
            </Text>
            <Text>
              Entrega grátis: 26 de outubro - 2 de novembro
            </Text>
          </View>

          <View style={{ marginHorizontal: 16 }}>
            <VendedorBadge
              nome="Renato Cariani"
              fotoUrl="https://placehold.co/100x100/222/fff?text=RC" // URL da foto do vendedor
              avaliacao={3.5}
              descricao="Eu gosto de vender minhas roupas usadas para que pessoas possam usar do mesmo que eu..."
              vendasNoMes={4}
            />
            
            <CarouselProdutos />
          </View>
        </View>
      </ScrollView>

      <View style={Styles.footer}>
        <TouchableOpacity style={Styles.cartButton} onPress={handleAddToCart}>
          <Text style={Styles.cartButtonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
