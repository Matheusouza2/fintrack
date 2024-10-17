import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "relative",
},

 header : {
    height: 90,
    width: 430,
    backgroundColor: '#053D6E'
 },

 texto_header : {
    width: 198,
    height: 35,
    top: 27,
    left: 10,
    fontSize: 30,
    color: '#C3C3C3',
    fontWeight: 400,
    lineHeight: 35.16,

 },

 imagem_add :{
    width: 37,
    height: 37,
    top: -5,
    left: 252,
 },

 imagem_pesquisa: {
    width: 23,
    height: 23,
    top: -35, 
    left: 324,
 },

 imagem_filtro: {
    width: 30,
    height: 26.25,
    top: -60,
    left: 382
 },

 container_inferior: {
    flex: 1,
    justifyContent: 'flex-end', // Alinha o conteúdo na parte inferior
    alignItems: 'center', // Centraliza horizontalmente
    marginBottom: 30, // Espaçamento opcional da parte inferio
 },

 opcoes_inferior: {
    width: 285.68,
    height: 51,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: '#00000040',
    shadowRadius: 5,
    shadowOffset: {width: 4,height: 0},
    shadowOpacity: 2
 },

 opcao_1: {
    width: 29.81,
    height: 28.43,
    top: 10,
    left: 26.25,
 },
 opcao_2: {
    width: 26.69,
    height: 27.08,
    top: -16,
    left: 77.41,
 },
 opcao_3: {
    width: 20.46,
    height: 23.92,
    top: -40,
    left: 125.46,
 },

 opcao_4: {
    width: 32.03,
    height: 25.27,
    top: -65,
    left: 167.28,
 },

 opcao_5: {
    width: 38.16,
    height: 31,
    top: -95,
    left: 221.11,
 },

 container_dados:{
    width: 413,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignSelf: 'center'
 },
 dados: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
 },

 icon:{
    borderRadius: 10,
 },

 texto_pequeno: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
    color: '#000000',
    width: 64, 
    height: 14,
 },
 text1: {
    fontSize: 20,
    fontWeight: '600'
 },
 text2: {
    fontSize: 14,
 },
 text3: {
    fontSize: 14,
 },
 image_container: {
    alignItems: 'center'
 },
 items: {
    gap: 8,
    justifyContent: 'center'
 }
});

