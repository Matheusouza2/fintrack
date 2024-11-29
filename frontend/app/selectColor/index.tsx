import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function Index() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const colors = [
    '#FF5733', '#FFBD33', '#DBFF33', '#75FF33',
    '#33FF57', '#33FFBD', '#33DBFF', '#3375FF',
    '#5733FF', '#BD33FF', '#FF33DB', '#FF3375',
  ];

  const handleColorSelect = (color:any) => {
    setSelectedColor(color);
    setModalVisible(false); // Fecha o modal após selecionar a cor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Color Selector with Modal</Text>
      <TouchableOpacity
        style={[styles.openModalButton, { backgroundColor: selectedColor || '#ccc' }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.openModalText}>
          {selectedColor ? `Selected: ${selectedColor}` : 'Open Color Selector'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select a Color</Text>
            <View style={styles.grid}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.colorBox, { backgroundColor: color }]}
                  onPress={() => handleColorSelect(color)}
                />
              ))}
            </View>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 8,
    alignItems: 'center',
  },
  openModalText: {
    fontSize: 16,
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