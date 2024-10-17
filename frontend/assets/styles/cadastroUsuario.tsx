import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#005e9c',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#005e9c',
    borderRadius: 20,
    marginBottom: 15,
  },
  sugestaoEmail: {
    color: '#005e9c',
    fontSize: 12,
    marginBottom: 10,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputSenha: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#005e9c',
    borderRadius: 20,
  },
  senhaToggle: {
    color: '#005e9c',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#00c7b6',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
