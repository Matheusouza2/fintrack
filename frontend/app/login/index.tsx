import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View, Alert} from "react-native";
import { styles } from "../../assets/styles/login";
import React, {useState} from "react";
import axios from "axios";


export default function App() {
    // texto padrão improtado como constante
    const texto = styles.text;

        const [cpf, setCpf] = useState('');
        const [senha, setSenha] = useState('');
    
        const handleLogin = async () => {
            try {
                const response = await axios.post('http://localhost:8081/login', {
                    email: cpf,
                    senha: senha
                });
    
                if (response.status === 200) {
                    Alert.alert("Sucesso", "Login bem-sucedido");
                    // Trate a lógica após o login aqui (ex: navegação)
                } else {
                    Alert.alert("Erro", "Credenciais inválidas");
                }
            } catch (error) {
                Alert.alert("Erro", "Erro ao realizar login");
            }
        };

    return (
        
        <KeyboardAvoidingView style={styles.container}>
            
            {/* logo */}
            <Image source={require('../../assets/icons/logo.png')}
            style={styles.logo}/> 

            {/* input do cpf */}
            <Text style={{...texto, color: '#56aaff', alignSelf: 'flex-start', marginLeft: '10%'}}>CPF</Text>
            <TextInput 
                keyboardType="numeric"
                textContentType="username"
                autoComplete="username"
                autoCorrect={false}
                style={styles.input}
            />

            {/* input da senha */}
            <Text style={{...texto, color: '#56aaff', alignSelf: 'flex-start', marginLeft: '10%'}}>Senha</Text>
            <TextInput 
                textContentType="password"
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry={true}
                autoCorrect={false}
                style={styles.input}
            />

            {/* botão de login */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}> 
                <Text style={{...texto, color: '#fff'}}>Entrar</Text>
            </TouchableOpacity>

            {/* texto de esqueceu a senha */}
            <TouchableOpacity style={styles.esqueceu}>
                <Text style={{...texto, color: '#56aaff', textDecorationLine: "underline"}}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}