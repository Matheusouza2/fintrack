import { Image, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { styles } from "../../assets/styles/novaTransferencia";



const novaTransferencia = () => {

  const [valor, setValor] = useState('0,00');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');


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


  return (
    <View style={styles.container}>

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
        style={styles.campoEntrada}
        placeholder="Data"
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

      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoSalvar}>
            <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default novaTransferencia;
