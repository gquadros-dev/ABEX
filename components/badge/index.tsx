import { Text, View } from 'react-native';
import Styles from './styles';

type BadgeProps = {
  label?: string;
  color?: string;
};

const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  if (!label) {
    return null;
  }

  return (
    <View style={[Styles.container, { backgroundColor: color ? color : '#7B42F6' }]}>
      <Text style={Styles.text}>{label}</Text>
    </View>
  );
}

export default Badge;
