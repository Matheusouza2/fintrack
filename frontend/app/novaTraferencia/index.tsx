import { post } from "../../services/axios"
import { Image, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { styles } from "../../assets/styles/novaTransferencia";



const novaTransferencia = () => {

  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [valor, setValor] = useState("0,00");

  const mudar = (elm:any) => {
    elm = elm.replace("R","").replace("$","").replace(".","").replace(",","")
    if (elm.length >= 3){
      let part1 = elm.slice(0, -2); // "Olá, Mun"
      let part2 = elm.slice(-2);    // "do!"
      elm = part1 + "," + part2;
    }
    
    setValor("R$"+elm)
  }

  const salvar = () => {
    let dados = {
      "descricao":descricao,
      "data": data,
      "tipoTransferencia": tipoTransferencia,
      "contaOrigem": contaOrigem,
      "contaDestino": contaDestino,
      "valor": valor
    }

    dados.valor = parseFloat(dados.valor.replace("R$","").replace(",","."))
    if ( dados.contaDestino && dados.contaOrigem && dados.descricao && dados.data && dados.tipoTransferencia && dados.valor)
      post("/transferencia", dados)
  }
  
  
  const handleMudancaValor = (text: string) => {
    
    if (text === '') {
      setValor('0,00');
      return;
    }
    
    const entradaTratada = text.replace(/\D/g, '');
    const quantia = parseFloat(entradaTratada) / 100;
    const valorFormatado = quantia.toFixed(2).replace('.', ',');
    
    setValor(valorFormatado);
  };
  //retorna a view e coloca o valor inicial como 0 e exibe o texto de nova transferência

  return (<View style={styles.container}>

      <View style={styles.containerCabecalho}>
        <Link href="/listarTransferencias">
          <Image
            source={require('../../assets/icons/iconeVoltar.png')}
            style={styles.setaRetroceder}
            />
          </Link>
        <Text style={styles.titulo}>Nova Transferência</Text>
      </View>

      <TextInput
        style={styles.campoValorEntrada}
        keyboardType="numeric"
        value={`R$ ${valor}`}
        onChangeText={handleMudancaValor}
      />

      <TextInput
        style={styles.campoEntrada}
        placeholder="Descrição"
        placeholderTextColor="#A9A9A9"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"  //placeholder é um texto temporário
        placeholderTextColor="#A9A9A9"
        value={data}
        onChangeText={setData}
      />
      
      <Picker
        selectedValue={tipoTransferencia}
        onValueChange={(itemValue, itemIndex) => setTipoTransferencia(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Não recorrente" value="Não recorrente" />
        <Picker.Item label="Parcelado" value="Parcelado" />
        <Picker.Item label="Fixo Mensal" value="Fixo Mensal" />
      </Picker>


      <TextInput
        style={styles.campoEntrada}
        placeholder="Conta Origem"
        placeholderTextColor="#A9A9A9"
        value={contaOrigem}
        onChangeText={setContaOrigem}
      />

      <TextInput
        style={styles.campoEntrada}
        placeholder="Conta Destino"
        placeholderTextColor="#A9A9A9"
        value={contaDestino}
        onChangeText={setContaDestino}
      />

      <Button title="Salvar" onPress={() => salvar()} />
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoSalvar}>
            <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </View>);
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default novaTransferencia;
