import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { styles } from "../../assets/styles/novaConta.style";

export default function Index() {
  const [nome, setNome] = useState("");
  const [saldoInicial, setSaldoInicial] = useState("");
  const [chequeEspecial, setChequeEspecial] = useState("");
  const [categoria, setCategoria] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSubmit = () => {
    console.log("Nome:", nome);
    console.log("Saldo inicial:", saldoInicial);
    console.log("Cheque especial:", chequeEspecial);
    console.log("Categoria:", categoria);
  };

  const handleSelect = (value: React.SetStateAction<string>) => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/arrow.png")}
              style={styles.arrowStyle}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Nova Conta</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.items}>
          <View style={styles.inputSection}>
            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              style={[styles.firstInput, styles.input]}
              placeholderTextColor={"#053D6E69"}
            />
            <View style={styles.selectSection}>
              <View style={styles.iconSection}>
                <Image
                  source={require("../../assets/icons/bank.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.dropButtonFather}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={styles.dropButton}
                >
                  <Text></Text>
                  <Image
                    source={require("../../assets/icons/dropArrow.png")}
                    style={styles.dropIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={saldoInicial}
            onChangeText={setSaldoInicial}
            placeholder="Saldo inicial"
            placeholderTextColor={"#053D6E69"}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={chequeEspecial}
            onChangeText={setChequeEspecial}
            placeholder="Cheque especial"
            placeholderTextColor={"#053D6E69"}
          />
          <View style={styles.inputSection}>
            <View style={styles.selectSection}>
              <View style={styles.iconSection}>
                <Image
                  source={require("../../assets/icons/bank.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.dropButtonFather}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={styles.dropButton}
                >
                  <Text></Text>
                  <Image
                    source={require("../../assets/icons/dropArrow.png")}
                    style={styles.dropIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              value={categoria}
              onChangeText={setCategoria}
              placeholder="Categoria"
              style={styles.input}
              placeholderTextColor={"#053D6E69"}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => handleSelect(item.value)}
                  underlayColor="#ddd"
                >
                  <View style={styles.option}>
                    <Text style={styles.optionText}>{item.label}</Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
