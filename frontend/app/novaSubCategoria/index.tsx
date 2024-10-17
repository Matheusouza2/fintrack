import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import { styles } from "@/assets/styles/novaSubCategoria";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoPrincipal}>
        <View style={styles.botaoVoltar}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/iconeVoltarAzul.png")}
              style={styles.flecha}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.cabecalhoTitulo}>Criar Subcategoria</Text>
      </View>
      <View style={styles.conteudos}>
        <View style={styles.secaoInput}>
            <TextInput
              value={""}
              onChangeText={() => {}}
              placeholder="Descrição"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
            />
          </View>
          <View style={styles.secaoInput}>
            <TextInput
              value={""}
              onChangeText={() => {}}
              placeholder="Categoria"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
            />
          </View>
        <View style={styles.selecaoIcone}>
          <Text style={styles.iconeTexto}>Cor</Text>
          <Image
              source={require("../../assets/icons/bolinha.png")}
              style={styles.bolinha1}
            />
        </View>
        <View style={styles.selecaoIcone}>
          <Text style={styles.iconeTexto}>Icone</Text>
          <Image
              source={require("../../assets/icons/bolinha.png")}
              style={styles.bolinha2}
            />
        </View>
      </View>
    </View>
  );
}
