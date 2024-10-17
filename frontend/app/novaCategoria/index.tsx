import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import { styles } from "../../assets/styles/novaCategoria";

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criar Categoria</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        // onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo (Receita | Despesa)"
        value={tipo}
        onChangeText={setTipo}
      />

      {/* Seletor de Cor */}
      <TouchableOpacity style={styles.colorContainer} onPress={abrirPaletaDeCores}>
        <Text style={styles.label}>Cor</Text>
        <View style={[styles.colorCircle, { backgroundColor: cor }]} />
      </TouchableOpacity>

      {/* Paleta de cores */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ColorPicker
              onColorSelected={selecionarCor}
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

      {/* Ícone não implementado */}
      <TouchableOpacity style={styles.iconContainer}>
        <Text style={styles.label}>Ícone</Text>
        <View style={styles.iconCircle} />
      </TouchableOpacity>
    </View>
  );
};

export default CriarCategoria;
