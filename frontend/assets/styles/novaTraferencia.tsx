import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    errorText: {
      color: 'red',
      marginBottom: 20,
      textAlign: 'center',
    },
  });