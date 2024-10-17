import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "../../assets/styles/login";

const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
  const [sugestaoEmail, setSugestaoEmail] = useState<string>('');

  const validarCPF = (input: string) => {
    const cpfNumeros = input.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
    if (cpfNumeros.length <= 11) {
      setCpf(cpfNumeros);
    }
  };

  const sugerirEmail = (input: string) => {
    setEmail(input);
    if (input.includes('@') && !input.includes('.com')) {
      setSugestaoEmail('Sugestões: gmail.com, hotmail.com');
    } else {
      setSugestaoEmail('');
    }
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const salvar = () => {
    if (nome === '' || cpf === '' || email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else if (cpf.length !== 11) {
      Alert.alert('Erro', 'O CPF deve conter exatamente 11 números.');
    } else {
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Novo Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF (xxx.xxx.xxx-xx)"
        keyboardType="numeric"
        value={cpf}
        onChangeText={validarCPF}
        maxLength={11}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={sugerirEmail}
        keyboardType="email-address"
      />
      {sugestaoEmail ? <Text style={styles.sugestaoEmail}>{sugestaoEmail}</Text> : null}

      <View style={styles.senhaContainer}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          secureTextEntry={!senhaVisivel}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={toggleSenhaVisivel}>
          <Text style={styles.senhaToggle}>{senhaVisivel ? 'Esconder' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroUsuario;
