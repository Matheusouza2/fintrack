import React, { useState  } from "react";
import { TouchableOpacity, View, StyleSheet,Image, Text, TextInput, Modal } from "react-native";
import { styles } from "@/assets/styles/novaSubCategoria";

export default function Index() {

  const bancos = {
    bb: require('../../assets/icons/Bancos/bb.jpg'),
    caixa: require('../../assets/icons/Bancos/caixa.png'),
    nubank: require('../../assets/icons/Bancos/nubank.png'),
    bradesco: require('../../assets/icons/Bancos/Bradesco.png'),
    inter: require('../../assets/icons/Bancos/inter.png'),
    itau: require('../../assets/icons/Bancos/itau.png'),
  };

  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBancoVisible, setModalBancoVisible] = useState(false);
  const [Banco, setBanco] = useState(bancos.bb);

  const colors = [
    '#FF5733', '#FFBD33', '#DBFF33', '#75FF33',
    '#33FF57', '#33FFBD', '#33DBFF', '#3375FF',
    '#5733FF', '#BD33FF', '#FF33DB', '#FF3375',
  ];

  const handleColorSelect = (color:any) => {
    setSelectedColor(color);
    setModalVisible(false); 
  };


  const handleBancoSelect = (banco:any) => {
    setSelectedColor(banco);
    setModalBancoVisible(false); 
    setBanco(banco)
    console.log(banco)
  };


  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoPrincipal}>
        <View style={styles.botaoVoltar}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/iconeVoltarAzul.png")}
              style={styles.flecha}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.cabecalhoTitulo}>Criar Subcategoria</Text>
      </View>
      <View style={styles.conteudos}>
        <View style={styles.secaoInput}>
            <TextInput
              placeholder="Descrição"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>
          <View style={styles.secaoInput}>
            <TextInput
              placeholder="Categoria"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
              value={categoria}
              onChangeText={setCategoria}
            />
          </View>
        <View style={styles.selecaoIcone}>
          <Text style={styles.iconeTexto}>Cor</Text>
          <TouchableOpacity
            style={[styless.openModalButton, { backgroundColor: selectedColor || '#ccc' }]}
            onPress={() => setModalVisible(true)}
          >
          </TouchableOpacity>
        </View>
       
        <View style={styles.selecaoIcone}>
          <Text style={styles.iconeTexto}>Icone</Text>

          <TouchableOpacity
            onPress={() => setModalBancoVisible(true)}
          >
            <Image
              source={Banco}
              style={styles.bolinha2}
            />
          </TouchableOpacity>
          
        </View>
        </View>

      {/* Inicio select color Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styless.modalOverlay}>
          <View style={styless.modalContent}>
            <Text style={styless.modalHeader}>Selecioner a Cor</Text>
            <View style={styless.grid}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styless.colorBox, { backgroundColor: color }]}
                  onPress={() => handleColorSelect(color)}
                />
              ))}
            </View>
            <TouchableOpacity
              style={styless.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styless.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Fim select color Modal*/}
      
      {/* Inicio select banco Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalBancoVisible}
        onRequestClose={() => setModalBancoVisible(false)}
      >
        <View style={styless.modalOverlay}>
          <View style={styless.modalContent}>
            <Text style={styless.modalHeader}>Selecioner o icone do banco</Text>
            <View style={styless.grid}>
            {Object.entries(bancos).map(([banco, file], index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBancoSelect(file)}
          >
             <Image
              source={file}
              style={styles.bolinha2}
            />
          </TouchableOpacity>
        ))}
            </View>
            <TouchableOpacity
              style={styless.closeModalButton}
              onPress={() => setModalBancoVisible(false)}
            >
              <Text style={styless.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Fim select banco Modal */}
      
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  colorPreview: {
    width: 100,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
colorPicker: {
    width: 300,
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
},
input: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
},


// Select color

containerr: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f5f5f5',
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
openModalButton: {
  padding: 15,
  borderRadius: 50,
  alignItems: 'center',
  width: 52,
    height: 52,
marginLeft: 14,
},
openModalText: {
  fontSize: 16,
  borderRadius:50,
  color: '#fff',
},
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  width: '80%',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
},
modalHeader: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
},
colorBox: {
  width: 50,
  height: 50,
  margin: 10,
  borderRadius: 8,
},
closeModalButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#2196F3',
  borderRadius: 5,
},
closeModalText: {
  color: '#fff',
  fontSize: 16,
},
});
