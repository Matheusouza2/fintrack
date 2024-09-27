
import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import "../../assets/styles/cardDashboard.tsx";
import { estilo } from "../../assets/styles/cardDashboard";

export default function Index() {

  const[dinheiro, setDinheiroBB] = useState("0,00");
  const[Previsto, setPrevistoBB] = useState("0,00");

  return (
    <View style={estilo.cartao}> 

      <View style = {estilo.caixa}>
        <Text style = {estilo.texto}> Contas  </Text>
      </View>

      <View style = {estilo.caixa}>
        <View>
          <Image source={require("../../assets/imagens/Banco_do_Brasil.png")}
            style = {estilo.iconesBanco}/>
        </View>
        
        <View>
          <Text style = {estilo.texto}> Banco do Brasil </Text>
          <Text style = {estilo.texto}> Previsto </Text>
        </View>

        <View>
          <Text> RS: {dinheiro}</Text>
        </View>
      </View>

      <View style = {estilo.caixa}>
        <View>
          <Image source={require("../../assets/imagens/Nubank.png")}
            style = {estilo.iconesBanco}/>
        </View>
        
        <View>
          <Text style = {estilo.texto}> Nubank </Text>
          <Text style = {estilo.texto}> Previsto </Text>
        </View>
        
        <View>
          <Text> RS: {dinheiro}</Text>
        </View>
      </View>

      <View style = {estilo.caixa}>
        <View>
          <Image source={require("../../assets/imagens/Inter.jpg")}
            style = {estilo.iconesBanco}/>
        </View>
            
        <View>
          <Text style = {estilo.texto}> Inter </Text>
          <Text style = {estilo.texto}> Previsto </Text>
        </View>

        <View>
          <Text> RS: {dinheiro}</Text>
        </View>
      </View>
  
    </View>
  )
}
