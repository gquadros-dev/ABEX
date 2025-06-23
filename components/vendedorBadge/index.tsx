import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Styles from "./styles";

// Definimos as propriedades que o nosso componente vai receber
type VendedorBadgeProps = {
  nome: string;
  fotoUrl: string;
  avaliacao: number;
  descricao: string;
  vendasNoMes: number;
};

const VendedorBadge: React.FC<VendedorBadgeProps> = ({
  nome,
  fotoUrl,
  avaliacao,
  descricao,
  vendasNoMes,
}) => {
  return (
    <View style={Styles.card}>
      <Image source={{ uri: fotoUrl }} style={Styles.avatar} />

      <View style={Styles.infoContainer}>
        <View style={Styles.header}>
          <Text style={Styles.nome}>{nome}</Text>
          <View style={Styles.avaliacaoContainer}>
            <Text style={Styles.avaliacaoNota}>{avaliacao.toFixed(1)}</Text>
            <Icon name="star" size={16} color="#FBBF24" />
          </View>
        </View>

        <Text style={Styles.descricao} numberOfLines={2}>
          {descricao}
        </Text>

        <View style={Styles.footer}>
          <Text style={Styles.vendas}>{vendasNoMes} vendas no mês</Text>
          <TouchableOpacity>
            <Text style={Styles.verMais}>Ver mais...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VendedorBadge;
