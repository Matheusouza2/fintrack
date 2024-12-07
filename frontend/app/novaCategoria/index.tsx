import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import { styles } from "../../assets/styles/novaCategoria";
import axios from "axios";

const CriarCategoria: React.FC = () => {
  const [descricao, setDescricao] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');
  const [cor, setCor] = useState<string>('#ffffff'); 
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const abrirPaletaDeCores = () => {
    setModalVisible(true);
  };

  const selecionarCor = (novaCor: string) => {
    setCor(novaCor);
    setModalVisible(false);
  };

  const handleSalvar = async () => {
    if (!descricao || !tipo || !cor) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/categorias', {
        descricao,
        tipo,
        cor
      });

      if (response.status === 200) {
        Alert.alert("Sucesso", "Categoria criada");
        setDescricao('');
        setTipo('');
        setCor('#ffffff');
      } else {
        Alert.alert("Erro", "Erro ao criar categoria.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao criar categoria.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criar Categoria</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo (Receita | Despesa)"
        value={tipo}
        onChangeText={setTipo}
      />

      <TouchableOpacity style={styles.colorContainer} onPress={abrirPaletaDeCores}>
        <Text style={styles.label}>Cor</Text>
        <View style={[styles.colorCircle, { backgroundColor: cor }]} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ColorPicker
              onColorSelected={(novaCor: string) => selecionarCor(novaCor)}
              style={styles.colorPicker}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.botaoEnviar} onPress={handleSalvar}>
        <Text style={styles.textoBotaoEnviar}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CriarCategoria;
