import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#EDEDEB",
    fontFamily: "Roboto, sans",
  },
  cabecalhoPrincipal: {
    height: 90,
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
    fontFamily: "Roboto",
  },
  botaoVoltar: {
    position: "absolute",
    left: 16,
    padding: 15,
  },
  flecha: {
    width: 30,
    height: 25,
  },
  cabecalhoTitulo: {
    fontSize: 20,
    color: "#727272",
    fontFamily: "Roboto, sans",
  },
  secaoInput: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 90,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#EDEDEB",
    borderBottomColor: "#0188EA",
    padding: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  conteudos: {
    width: "100%",
    height: "100%",
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 120,
  },
  bolinha1: {
width: 52,
    height: 52,
marginLeft: 14,
  },
  bolinha2: {
    width: 79,
height: 79,
marginLeft: 14,
  },
  selecaoIcone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 48,
    
  },
  iconeTexto: {
fontSize: 20,
    color: "#053D6E69",
  }
})