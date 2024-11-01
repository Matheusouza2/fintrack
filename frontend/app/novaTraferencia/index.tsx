import { post } from "../../services/axios"
import { Image, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { styles } from "../../assets/styles/novaTransferencia";
import DateTimePicker from '@react-native-community/datetimepicker';


const novaTransferencia = () => {

  const [descricao, setDescricao] = useState('');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState('dd/mm/aaaa')
  const [tipoTransferencia, setTipoTransferencia] = useState('Não recorrente');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [valor, setValor] = useState("0,00");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate:any) => {
    setShow(false)
    const currentDate = selectedDate || data;
    setData(currentDate);
    const day = String(currentDate.getDate()).padStart(2, '0');      // Dia (1-31), padStart adiciona zero à esquerda se necessário
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Mês (0-11), somando +1 e padStart para ter 2 dígitos
    const year = currentDate.getFullYear();  
    setData( `${day}/${month}/${year}`)
    setShow(Platform.OS === 'ios');
  };

  const showDatePicker = () => {
    setShow(true);
  };

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
      "valor": parseFloat(valor.replace("R$","").replace(",","."))
    }

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

  return (<View style={styles.container}>
 
      <View style={styles.containerCabecalho}>
        <Link href="/listarTransferencias" style={{height:"100%",justifyContent:"center"}}>
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
        placeholder="Descrição"
        placeholderTextColor="#A9A9A9"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={{width:"98%",justifyContent:"center", alignItems:"center"}} onPress={showDatePicker}>
        <TextInput
        style={styles.campoEntrada}
        placeholder="Descrição"
        placeholderTextColor="#A9A9A9"
        value={data}
        editable={false}
        onFocus={Keyboard.dismiss}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date" // ou "time" para selecionar hora
          display="default"
          onChange={onChange}
        />
      )}


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

export default novaTransferencia;
