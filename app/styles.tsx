// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row', // Mantém a direção em linha
    flexWrap: 'wrap',     // Mantém a quebra de linha
    justifyContent: 'space-between', // Mantém o espaçamento
    paddingHorizontal: '2%',
    paddingTop: 10,
    paddingBottom: 20,
  },
  produto: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 16,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productDescription: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  }
});

export default styles;
