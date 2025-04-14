import React, { useState, useEffect } from "react";
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
  const [categorias, setCategorias] = useState([]); 

  
  const carregarCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/categorias"); 
      setCategorias(response.data); 
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  const handleSalvar = async () => {
    const dados = {
      agencia: selecao1,
      conta: nome,
      saldoInicial: parseFloat(saldoInicial),
      valorChequeEspecial: parseFloat(chequeEspecial),
      categoria: categoria,
      conta_banco: {
        connect: { id: parseInt(selecao2) },
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

  const handleSelecionarCategoria = (value) => {
    setCategoria(value); 
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
            <TouchableOpacity
              onPress={() => setVisibilidadeModal2(true)}
              style={styles.botaoDropdown}
            >
              <Text>{categoria || "Selecione uma categoria"}</Text>
              <Image
                source={require("../../assets/icons/iconeMenu.png")}
                style={styles.iconeDropdown}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botaoEnviar} onPress={handleSalvar}>
            <Text style={styles.textoBotaoEnviar}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal para selecionar categoria */}
      <Modal
        transparent={true}
        visible={visibilidadeModal2}
        onRequestClose={() => setVisibilidadeModal2(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.conteudoModal}>
            <FlatList
              data={categorias}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => handleSelecionarCategoria(item.nome)}
                  underlayColor="#ddd"
                >
                  <View style={styles.opcao}>
                    <Text style={styles.textoOpcao}>{item.nome}</Text>
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
