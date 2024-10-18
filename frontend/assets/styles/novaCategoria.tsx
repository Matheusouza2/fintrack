import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#005e9c',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#005e9c',
    borderRadius: 5,
    marginBottom: 15,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#005e9c',
    marginLeft: 10,
  },
  label: {
    fontSize: 18,
    color: '#005e9c',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cccccc',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  colorPicker: {
    width: '100%',
    height: 250,
  },
  closeButton: {
    backgroundColor: '#005e9c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  botaoEnviar: {
    marginTop: 50,
    backgroundColor: "#00DFA3",
    width: 174,
    height: 33,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoEnviar: {
    color: "#EDEDEB",
    fontSize: 20,
  }
});

export default styles;
