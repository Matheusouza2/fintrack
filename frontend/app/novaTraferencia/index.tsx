import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { post } from "../../services/axios"

//componente funcional novaTransacao e seta useState para criar a descrição, data, tipo de Transferência, conta de Origem e conta de Destino
const novaTraferencia = () => {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [valor, setValor] = useState("R$ ");

  const mudar = (elm) => {
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
  //retorna a view e coloca o valor inicial como 0 e exibe o texto de nova transferência
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Transferência</Text>
      <TextInput 
        style={styles.value}
        // placeholder="0,00"
        value={valor}
        onChangeText={(valor) => mudar(valor)}
        keyboardType='numeric'
        />


      <TextInput
        style={styles.input}
        placeholder="Descrição"//placeholder é um texto temporário
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"  //placeholder é um texto temporário
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
        style={styles.input}
        placeholder="Conta Origem"
        value={contaOrigem}
        onChangeText={setContaOrigem}
      />

      <TextInput
        style={styles.input}
        placeholder="Conta Destino"
        value={contaDestino}
        onChangeText={setContaDestino}
      />

      <Button title="Salvar" onPress={() => salvar()} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default novaTraferencia;