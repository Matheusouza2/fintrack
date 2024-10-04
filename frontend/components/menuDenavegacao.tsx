import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { styles as cardStyles } from '../assets/styles/card'; 
import { FontAwesome } from '@expo/vector-icons'; 

const FinancialIconsBar = () => {
  return (
    <View style={localStyles.container}>  {}
      <TouchableOpacity style={localStyles.button}>
        <FontAwesome name = "pie-chart" size = {24} color  = "#003366" />
      </TouchableOpacity>
      <TouchableOpacity style={localStyles.button}>
        <FontAwesome name = "bank" size = {24} color = "#003366" />
      </TouchableOpacity>
      <TouchableOpacity style={localStyles.button}>
        <FontAwesome name = "exchange" size = {24} color = "#003366" />
      </TouchableOpacity>
      <TouchableOpacity style={localStyles.button}>
        <FontAwesome name = "credit-card" size = {24} color = "#003366" />
      </TouchableOpacity>
      <TouchableOpacity style={localStyles.button}>
        <FontAwesome name = "money" size = {24} color = "#003366" />
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({  
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    padding: 10,
  },
});

export default FinancialIconsBar;
