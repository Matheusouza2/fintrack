import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function Cabecalho() {
  return (
    <View style={styles.cabecalhoPrincipal}>
      <View style={styles.botaoVoltar}>
        <TouchableOpacity
        >
          <Image
            source={require("../../assets/icons/iconeVoltar.png")}
            style={styles.flecha}

          />
        </TouchableOpacity>
      </View>
      <Text style={styles.cabecalhoTitulo}>Nova Conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalhoPrincipal: {
    height: 90,
    width: "100%",
    padding: 16,
    backgroundColor: "#053D6E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
    fontFamily: "Roboto"
  },
  botaoVoltar: {
    position: "absolute",
    left: 16,
    borderWidth: 1,
    borderColor: "#0188EA",
    borderRadius: 20,
    padding: 15,
  },
  flecha: {
    width: 30,
    height: 25,
  },
  cabecalhoTitulo: {
    fontSize: 30,
    color: "#C3C3C3",
    fontFamily: "Roboto, sans",
  },
});
