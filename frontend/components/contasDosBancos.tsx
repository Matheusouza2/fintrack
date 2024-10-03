
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { estilo } from "../assets/styles/cardDashboard";


const ContaBanco = ({ imagens, nome, valor }) => (
  <View style={estilo.caixa}>
    <View>
      <Image source={imagens} style={estilo.iconesBanco} />
    </View>
    <View>
      <Text style={estilo.texto}>{nome}</Text>
      <Text style={estilo.texto}>Previsto</Text>
    </View>
    <View>
      <Text>RS: {valor}</Text>
    </View>
  </View>
);

const contasDosBancos = () => {
  const [dinheiro, setDinheiroBB] = useState("0,00");
  const [previsto, setPrevistoBB] = useState("0,00");

  return (
    <View style={estilo.cartao}>
      <View style={estilo.caixa}>
        <Text style={estilo.texto}>Contas</Text>
      </View>

      <ContaBanco 
        imagens={require("../../assets/imagens/Banco_do_Brasil.png")}
        nome="Banco do Brasil"
        valor={dinheiro}
      />
      
      <ContaBanco 
        imagens={require("../../assets/imagens/Nubank.png")}
        nome="Nubank"
        valor={dinheiro}
      />
      
      <ContaBanco 
        imagens={require("../../assets/imagens/Inter.jpg")}
        nome="Inter"
        valor={dinheiro}
      />
    </View>
  );
};

export default contasDosBancos;
      