import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#E5E7EB", // Um cinza claro
    borderRadius: 16,
    paddingVertical: 12,
  },
  scrollViewContainer: {
    gap: 10,
  },
  produtoContainer: {
    width: 100,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});

export default styles;
