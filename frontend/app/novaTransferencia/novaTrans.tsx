import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


//componente funcional novaTransacao e seta useState para criar a descrição, data, tipo de Transferência, conta de Origem e conta de Destino
const novaTransacao = () => {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');


  //retorna a view e coloca o valor inicial como 0 e exibe o texto de nova transferência
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Transferência</Text>
      <Text style={styles.value}>R$ 0,00</Text>


      //os TextInptut tem dois campos que são controlados pelo estado correspondente e onChangeText atualiza o estado
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


      //O picker vc pode selecionar o tipo de transferência; que o valor é controldo pelo estado tipoTransferencia
      <Picker
        selectedValue={tipoTransferencia}
        onValueChange={(itemValue, itemIndex) => setTipoTransferencia(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Não recorrente" value="Não recorrente" />
        <Picker.Item label="Parcelado" value="Parcelado" />
        <Picker.Item label="Fixo Mensal" value="Fixo Mensal" />
      </Picker>


      //tem dois dois campos que são controlados pelos estados que tem abaixo
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

      <Button title="Salvar" onPress={() => {}} />
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

export default novaTransacao;