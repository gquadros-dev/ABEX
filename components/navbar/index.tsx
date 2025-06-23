import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Styles from "./styles";
import { Link } from "expo-router";

const Navbar = () => {
  const [selected, setSelected] = useState("home"); // Estado para controlar o ícone ativo
  const insets = useSafeAreaInsets();

  // Função para definir a cor: preto para o ícone selecionado, cinza para os outros
  const getIconColor = (iconName: string) => {
    return selected === iconName ? "#000000" : "#888888";
  };

  return (
    <View style={[Styles.container, { paddingBottom: insets.bottom + 10 }]}>
      <Link href={{ pathname: "/configuracoes" }} asChild>
        <TouchableOpacity onPress={() => setSelected("settings")}>
          <Icon name="settings" size={35} color={getIconColor("settings")} />
        </TouchableOpacity>
      </Link>

      <TouchableOpacity onPress={() => setSelected("")}>
        <Icon
          name=""
          size={35}
          color={getIconColor("")}
        />
      </TouchableOpacity>

      <Link href={"/"} asChild>
        <TouchableOpacity onPress={() => setSelected("home")}>
          <Icon name="home" size={35} color={getIconColor("home")} />
        </TouchableOpacity>
      </Link>

      <TouchableOpacity onPress={() => setSelected("cart")}>
        <Icon
          name="shopping-cart"
          size={35}
          color={getIconColor("cart")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelected("person")}>
        <Icon
          name="person-outline"
          size={35}
          color={getIconColor("person")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
