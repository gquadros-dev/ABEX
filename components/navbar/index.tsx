import { View } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const Navbar = () => {
  const [selected, setSelected] = useState('home');

  return (
    <View style={Styles.container}>
      <Icon name="home" size={35} color="#000" />
      <Icon name="home" size={35} color="#000" />
      <Icon name="home" size={35} color="#000" />
      <Icon name="home" size={35} color="#000" />
      <Icon name="home" size={35} color="#000" />
    </View>
  );
}

export default Navbar;
