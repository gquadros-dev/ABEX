import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Pesquisar...",
}) => {
  return (
    <View style={Styles.container}>
      <Icon name="search" size={24} color="#2c2c2c" style={Styles.icon} />
      <TextInput
        style={Styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
