import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  saudacao: {
    fontSize: 24,
    color: '#053D6E',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instrucoes: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  campoEntrada: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  viewBotao: {
    backgroundColor: '#00DFA3', // Cor de fundo personalizada do botão
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Style;
