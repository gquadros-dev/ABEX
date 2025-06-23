// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: '1%',
    paddingBottom: 60,
  },
  produto: {
    marginBottom: 2,
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
