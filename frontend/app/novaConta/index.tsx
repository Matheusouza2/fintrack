import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Cabecalho from "@/components/cabecalho/cabecalho";
import { styles } from "./novaConta.style";

export default function Index() {
  const [nome, setNome] = useState("");
  const [saldoInicial, setSaldoInicial] = useState("");
  const [chequeEspecial, setChequeEspecial] = useState("");
  const [categoria, setCategoria] = useState("");
  const [visibilidadeModal, setVisibilidadeModal] = useState(false);

  const opcoes = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];

  const handleSalvar = () => {
    console.log("Nome:", nome);
    console.log("Saldo inicial:", saldoInicial);
    console.log("Cheque especial:", chequeEspecial);
    console.log("Categoria:", categoria);
  };

  const handleSelecionar = (value: React.SetStateAction<string>) => {
    setVisibilidadeModal(false);
  };

  return (
    <View style={styles.container}>
      <Cabecalho />
      <ScrollView style={styles.conteudo}>
        <View style={styles.itens}>
          <View style={styles.secaoInput}>
            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              style={[styles.primeiroInput, styles.input]}
              placeholderTextColor={"#053D6E69"}
            />
            <View style={styles.secaoSelecionar}>
              <View style={styles.secaoIcone}>
                <Image
                  source={require("../../assets/icons/banco.png")}
                  style={styles.icone}
                />
              </View>
              <View style={styles.paiBotaoDropdown}>
                <TouchableOpacity
                  onPress={() => setVisibilidadeModal(true)}
                  style={styles.botaoDropdown}
                >
                  <Text></Text>
                  <Image
                    source={require("../../assets/icons/iconeMenu.png")}
                    style={styles.iconeDropdown}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={saldoInicial}
            onChangeText={setSaldoInicial}
            placeholder="Saldo inicial"
            placeholderTextColor={"#053D6E69"}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={chequeEspecial}
            onChangeText={setChequeEspecial}
            placeholder="Cheque especial"
            placeholderTextColor={"#053D6E69"}
          />
          <View style={styles.secaoInput}>
            <View style={styles.secaoSelecionar}>
              <View style={styles.secaoIcone}>
                <Image
                  source={require("../../assets/icons/banco.png")}
                  style={styles.icone}
                />
              </View>
              <View style={styles.paiBotaoDropdown}>
                <TouchableOpacity
                  onPress={() => setVisibilidadeModal(true)}
                  style={styles.botaoDropdown}
                >
                  <Text></Text>
                  <Image
                    source={require("../../assets/icons/iconeMenu.png")}
                    style={styles.iconeDropdown}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              value={categoria}
              onChangeText={setCategoria}
              placeholder="Categoria"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
            />
          </View>

          <TouchableOpacity style={styles.botaoEnviar} onPress={handleSalvar}>
            <Text style={styles.textoBotaoEnviar}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={visibilidadeModal}
        onRequestClose={() => setVisibilidadeModal(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.conteudoModal}>
            <FlatList
              data={opcoes}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => handleSelecionar(item.value)}
                  underlayColor="#ddd"
                >
                  <View style={styles.opcao}>
                    <Text style={styles.textoOpcao}>{item.label}</Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
