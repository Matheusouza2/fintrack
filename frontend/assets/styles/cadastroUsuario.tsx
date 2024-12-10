import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logoSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#053d6e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 50,
  },
  logoTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  logoFin: {
    color: '#053d6e',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoTrack: {
    color: '#ff7d01',
    fontSize: 24,

  },
  loginButton: {
    alignSelf: 'flex-start',
  },
  loginButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
    color: '#6D6D6D',
  },
  headerSecond: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  input: {
    color: '#5FB7FF',
    height: 50,
    borderBottomColor: '#0188ea',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  sugestaoEmail: {
    color: '#888',
    marginBottom: 10,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',

    marginBottom: 15,
  },
  inputSenha: {
    color: '#5FB7FF',
    height: 50,
    borderBottomColor: '#0188ea',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    flex: 1,
  },
  senhaToggle: {
    paddingHorizontal: 15,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  button: {
    height: 60,
    backgroundColor: '#053d6e',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});