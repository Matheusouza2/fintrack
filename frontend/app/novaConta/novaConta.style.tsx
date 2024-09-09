import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDEB",
    fontFamily: "Roboto, sans"
  },
  conteudo: {
    flex: 1,
    padding: 16,
  },
  itens: {
    height: 400,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  caixa: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#0188EA",
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  secaoInput: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoEnviar: {
    marginTop: 50,
    backgroundColor: "#00DFA3",
    width: 174,
    height: 33,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoEnviar: {
    color: "#EDEDEB",
    fontSize: 20,
  },
  secaoSelecionar: {
    flexDirection: "row",
    marginRight: 5,
  },
  icone: {
    width: 36,
    height: 36,
  },
  iconeDropdown: {
    width: 14,
    height: 8,
  },
  secaoIcone: {
    backgroundColor: "#D9D9D9",
    width: 61,
    height: 61,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  paiBotaoDropdown: {
    justifyContent: "center",
    alignItems: "center",
  },
  botaoDropdown: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
  },
  picker: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  conteudoModal: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  opcao: {
    padding: 15,
  },
  textoOpcao: {
    fontSize: 16,
  },
  primeiroInput: {
    marginRight: 21,
  },
});
