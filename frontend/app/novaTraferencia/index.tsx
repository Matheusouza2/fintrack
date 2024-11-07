import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { post } from "../../services/axios";
import { TextInputMask } from 'react-native-masked-text';
import { styles } from '../../assets/styles/novaTraferencia';

const novaTraferencia = () => {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [valor, setValor] = useState("R$ ");
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const hoje = new Date();
    const dataFormatada = `${hoje.getDate().toString().padStart(2, '0')}/${(hoje.getMonth() + 1).toString().padStart(2, '0')}/${hoje.getFullYear()}`;
    setData(dataFormatada);
  }, []);

  const mudar = (elm) => {
    elm = elm.replace("R", "").replace("$", "").replace(".", "").replace(",", "");
    if (elm.length >= 3) {
      let part1 = elm.slice(0, -2);
      let part2 = elm.slice(-2);
      elm = part1 + "," + part2;
    }
    setValor("R$" + elm);
  };

  const validarData = (data) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(data);
  };

  const handleDataChange = (data) => {
    setData(data);
    if (!validarData(data)) {
      setErrorMessage('Por favor, insira uma data válida no formato DD/MM/YYYY.');
    } else {
      setErrorMessage('');
    }
  };

  const salvar = () => {
    let dados = {
      "descricao": descricao,
      "data": data,
      "tipoTransferencia": tipoTransferencia,
      "contaOrigem": contaOrigem,
      "contaDestino": contaDestino,
      "valor": valor
    };

    dados.valor = parseFloat(dados.valor.replace("R$", "").replace(",", "."));
    if (dados.contaDestino && dados.contaOrigem && dados.descricao && dados.data && dados.tipoTransferencia && dados.valor)
      post("/transferencia", dados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Transferência</Text>
      <TextInput
        style={styles.value}
        value={valor}
        onChangeText={(valor) => mudar(valor)}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={handleDataChange}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

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

export default novaTraferencia;