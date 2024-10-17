import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
  
    titulo: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 20,
      color: '#0188EA',
    },
  
    containerCabecalho: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  
    setaRetroceder: {
      position: 'absolute',
      left: -60,
      bottom: -20,
      width: 25,
      height: 25,
      tintColor: '#0188EA',
      resizeMode: 'contain',
      marginBottom: 20,
    },
  
    campoValorEntrada: {
      textAlign: 'center',
      color: '#0188EA',
      borderBottomWidth: 1,
      borderBottomColor: '#0188EA',
      height: 40,
      fontSize: 40,
      padding: 40,
      marginBottom: 30,
      width: '95%',
    },
  
    campoEntrada: {
      width: '95%',
      height: 40,
      borderColor: '#CCC',
      borderBottomWidth: 1,
      borderBottomColor: '#0188EA',
      paddingHorizontal: 10,
      backgroundColor: '#FFF',
      marginVertical: 25, // Define uma margem vertical uniforme para todos os campos de entrada
    },
  
    picker: {
      width: '95%',
      marginTop: 40,
      height: 50,
      color: '#A9A9A9',
      marginBottom: 20, // Define uma margem vertical uniforme para o Picker também
    },
  
    containerBotao: {
      padding: 15,
      borderRadius: 20,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
  
    botaoSalvar: {
      backgroundColor: '#053D6E',
      borderRadius: 40,
      marginTop: 90,
      padding: 15,
      alignItems: 'center',
      width: '90%',
    },
  
    textoBotao: {
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
  });