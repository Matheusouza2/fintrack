import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View, Alert } from "react-native";
import { styles } from "../../assets/styles/login";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
    const texto = styles.text;

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/login', {
                email: cpf.replace(/\D/g, ''), // Envia o CPF sem máscara para o backend
                senha: senha
            });

            if (response.status === 200) {
                Alert.alert("Sucesso", "Login bem-sucedido");
            } else {
                Alert.alert("Erro", "Credenciais inválidas");
            }
        } catch (error) {
            Alert.alert("Erro", "Erro ao realizar login");
        }
    };

    // Função para formatar o CPF com a máscara
    const handleCpfChange = (text) => {
        const onlyNumbers = text.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        let formattedCpf = onlyNumbers;

        if (onlyNumbers.length > 3) {
            formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
        }
        if (onlyNumbers.length > 6) {
            formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6)}`;
        }
        if (onlyNumbers.length > 9) {
            formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9, 11)}`;
        }

        setCpf(formattedCpf);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* Logo */}
            <Image source={require('../../assets/icons/logo.png')}
                style={styles.logo} /> 

            {/* Input do CPF */}
            <Text style={{ ...texto, color: '#56aaff', alignSelf: 'flex-start', marginLeft: '10%' }}>CPF</Text>
            <TextInput 
                keyboardType="numeric"
                textContentType="username"
                autoComplete="username"
                autoCorrect={false}
                style={styles.cpfInput} // Estilo específico para o CPF
                value={cpf}
                onChangeText={handleCpfChange} // Aplica a máscara conforme o texto é digitado
                maxLength={14} //(formato 000.000.000-00)
            />

            {/* Input da Senha */}
            <Text style={{ ...texto, color: '#56aaff', alignSelf: 'flex-start', marginLeft: '10%' }}>Senha</Text>
            <TextInput 
                textContentType="password"
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry={true}
                autoCorrect={false}
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
            />

            {/* Botão de Login */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}> 
                <Text style={{ ...texto, color: '#fff' }}>Entrar</Text>
            </TouchableOpacity>

            {/* Texto de "Esqueceu a Senha" */}
            <TouchableOpacity style={styles.esqueceu}>
                <Text style={{ ...texto, color: '#56aaff', textDecorationLine: "underline" }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}
