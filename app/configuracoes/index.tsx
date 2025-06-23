import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Navbar from "@/components/navbar";

import Styles from "./styles";
const menuOptions = [
  "Livro de endereços",
  "Gerenciar minha conta",
  "Localização",
  "Idioma",
  "Política de privacidade",
  "Termos e condições",
  "Conecte-se a nós",
  "Sobre o Brechó Online",
];

export default function Configuracoes() {
  const router = useRouter();

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={Styles.headerTitle}>Configurações</Text>
          <View style={{ width: 28 }} />
        </View>

        <ScrollView contentContainerStyle={Styles.scrollContainer}>
          <Text style={Styles.userName}>Pedro Pedroso</Text>

          {menuOptions.map((option, index) => (
            <TouchableOpacity key={index} style={Styles.menuItem}>
              <Text style={Styles.menuItemText}>{option}</Text>
              <Icon name="chevron-right" size={24} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}
