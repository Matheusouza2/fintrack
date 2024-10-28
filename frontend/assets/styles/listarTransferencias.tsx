import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#005e9c', 
    padding: 10,
    paddingHorizontal: 15,
  },
  texto_header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  imagem_add: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  imagem_pesquisa: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginHorizontal: 10,
  },
  imagem_filtro: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  container_dados: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2, 
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dados: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0', 
  },
  text_container: {
    justifyContent: 'center',
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  text2: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  text3: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 3,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  container_inferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  opcoes_inferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  opcao_1: {
    width: 40,
    height: 40,
  },
  opcao_2: {
    width: 40,
    height: 40,
  },
  opcao_3: {
    width: 40,
    height: 40,
  },
  opcao_4: {
    width: 40,
    height: 40,
  },
  opcao_5: {
    width: 40,
    height: 40,
  },
});
