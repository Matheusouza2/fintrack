import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "@/assets/styles/listarCategorias";

export default function Index() {
  const [selecao, setSelecao] = useState(1);

  //funcao que atualiza a escolha nos botoes receitas ou despesas
  const updatedSwitchData = (mode: number) => {
    setSelecao(mode);
  };

  //visibilidade do menu 3 pontinhos
  const [visivel, setVisivel] = useState(false);

  const menu = () => {
    setVisivel(!visivel);
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
        <Text style={styles.cabecalhoTitulo}>Categorias</Text>
        <View style={styles.botaoAlternado}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(1)}
            style={{
              flex: 1,
              backgroundColor: selecao === 1 ? "#FFFFFF" : "",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#053D6E" }}>{"Receitas"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(2)}
            style={{
              flex: 1,
              backgroundColor: selecao === 2 ? "#FFFFFF" : "",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#053D6E" }}>{"Despesas"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <View style={styles.cardConteudo}>
            <Image
              source={require("../../assets/imagens/alimentacao.png")}
              style={styles.iconeCategoria}
            />
            <Text
              style={{
                fontSize: 20,
                color: "#727272",
              }}
            >
              Alimentação
            </Text>
          </View>
          <TouchableOpacity onPress={menu}>
            <Image
              source={require("../../assets/icons/pontinhos.png")}
              style={styles.pontinhos}
            />
          </TouchableOpacity>
          {visivel && (
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.opcao}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.opcao}>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.opcao}>Subcategorias</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
