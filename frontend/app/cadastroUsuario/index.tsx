import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, Image, Button } from 'react-native';
import { styles } from "../../assets/styles/cadastroUsuario";

const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState < string > ('');
  const [cpf, setCpf] = useState < string > ('');
  const [email, setEmail] = useState < string > ('');
  const [senha, setSenha] = useState < string > ('');
  const [senhaVisivel, setSenhaVisivel] = useState < boolean > (false);
  const [sugestaoEmail, setSugestaoEmail] = useState < string > ('');

  const validarCPF = (input: string) => {
    const cpfNumeros = input.replace(/[^0-9]/g, '');
    if (cpfNumeros.length <= 11) {
      setCpf(cpfNumeros);
    }
  };

  const validarEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(input);
    if (input.includes('@') && !emailRegex.test(input)) {
      setSugestaoEmail('Sugestões: gmail.com, hotmail.com');
    } else {
      setSugestaoEmail('');
    }
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const salvar = () => {
    if (!nome || !cpf || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else if (cpf.length !== 11) {
      Alert.alert('Erro', 'O CPF deve conter exatamente 11 números.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
    } else {
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoSubContainer}>
          <View style={styles.logoCircle}>
            <Image
              source={require('@/assets/imagens/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoFin}>Fin</Text>
            <Text style={styles.logoTrack}>Track</Text>
          </View>
        </View>
        <TouchableOpacity onPress={salvar} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Criar nova</Text>
      <Text style={styles.headerSecond}>Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={validarEmail}
        keyboardType="email-address"
      />
      {sugestaoEmail ? (
        <Text style={styles.sugestaoEmail}>{sugestaoEmail}</Text>
      ) : null}

      <View style={styles.senhaContainer}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          secureTextEntry={!senhaVisivel}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={toggleSenhaVisivel}>
          <Text style={styles.senhaToggle}>
            {senhaVisivel ? '👀' : '🙈'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroUsuario;