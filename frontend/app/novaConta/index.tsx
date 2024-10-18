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
import { styles } from "../../assets/styles/novaConta.style";
import axios from "axios";

export default function Index() {
  const [nome, setNome] = useState("");
  const [saldoInicial, setSaldoInicial] = useState("");
  const [chequeEspecial, setChequeEspecial] = useState("");
  const [categoria, setCategoria] = useState("");
  const [visibilidadeModal1, setVisibilidadeModal1] = useState(false);
  const [visibilidadeModal2, setVisibilidadeModal2] = useState(false);
  const [selecao1, setSelecao1] = useState("");
  const [selecao2, setSelecao2] = useState("");
  
// ajustar nomes opcoes1 e opcoes2 de acordo com o real significado dentro da aplicações, correção futura!!
  const opcoes1 = [
    { label: "Opção 1", value: "1" },
    { label: "Opção 2", value: "2" },
    { label: "Opção 3", value: "3" },
  ];

  const opcoes2 = [
    { label: "Opção a", value: "1" },
    { label: "Opção b", value: "2" },
    { label: "Opção c", value: "3" },
  ];

  const handleSalvar = async () => {
    const dados = {
      agencia: selecao1,
      conta: nome,
      saldoInicial: parseFloat(saldoInicial),
      valorChequeEspecial: parseFloat(chequeEspecial), 
      categoria: categoria,
      conta_banco: {
        connect: { id: parseInt(selecao2)},
      },
    };


    try {
      const response = await axios.post(
        "http://localhost:9090/api/contas",
        dados,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Conta criada com sucesso:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Erro ao criar conta:", error.response.data.message);
      } else {
        console.error("Erro na chamada da API:", error);
      }
    }
  };

  const handleSelecionar1 = (value: React.SetStateAction<string>) => {
    setSelecao1(value);
    setVisibilidadeModal1(false);
  };

  const handleSelecionar2 = (value: React.SetStateAction<string>) => {
    setSelecao2(value);
    setVisibilidadeModal2(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoPrincipal}>
        <View style={styles.botaoVoltar}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/iconeVoltar.png")}
              style={styles.flecha}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.cabecalhoTitulo}>Nova Conta</Text>
      </View>
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
                  onPress={() => setVisibilidadeModal1(true)}
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
                  onPress={() => setVisibilidadeModal2(true)}
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
        visible={visibilidadeModal1}
        onRequestClose={() => setVisibilidadeModal1(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.conteudoModal}>
            <FlatList
              data={opcoes1}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => handleSelecionar1(item.value)}
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

      {/* Modal para o Segundo Select */}
      <Modal
        transparent={true}
        visible={visibilidadeModal2}
        onRequestClose={() => setVisibilidadeModal2(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.conteudoModal}>
            <FlatList
              data={opcoes2}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => handleSelecionar2(item.value)}
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
