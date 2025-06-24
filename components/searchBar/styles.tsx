import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    height: 48,
    width: '90%',
    zIndex: 1000,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 4,
    marginRight:8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 18,
    color: '#fff',
    borderRadius: 100,
    borderColor: '#ccc',
    borderWidth: 2,
    paddingLeft: 8,
    lineHeight: 16,
  },
});

export default styles;
