import { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View} from "react-native";
import { styles } from "../assets/styles/login";
import { Redirect } from "expo-router";

export default function App() {
    // texto padrão improtado como constante
    const texto = styles.text;

    return (
        
        <KeyboardAvoidingView style={styles.container}>
            
            {/* logo */}
            <Image source={require('../assets/images/logo.png')}
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
            <TouchableOpacity style={styles.button}> 
                {/* onPress={submit} */}
                <Text style={{...texto, color: '#fff'}}>Entrar</Text>
            </TouchableOpacity>

            {/* texto de esqueceu a senha */}
            <TouchableOpacity style={styles.esqueceu}>
                <Text style={{...texto, color: '#56aaff', textDecorationLine: "underline"}}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}