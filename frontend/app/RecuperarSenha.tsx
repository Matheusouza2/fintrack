import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Style from '../assets/styles/RecuperarSenha'; // Importando o arquivo de estilo separado

export default function RecuperacaoSenhaTela() {
    const [email, setEmail] = useState('');

    const enviarEmailRecuperacao = () => {
        console.log('Email enviado para:', email);
    };

    return (
        <View style={Style.container}>
            <Text style={Style.saudacao}>Olá Cliente</Text>
            <Text style={Style.instrucoes}>
                Digite abaixo o e-mail vinculado à sua conta, um email será enviado com o processo de recuperação de senha da sua conta do FinTrack.
            </Text>

            <TextInput
                style={Style.campoEntrada}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TouchableOpacity style={Style.viewBotao} onPress={enviarEmailRecuperacao}>
                <Text style={Style.textoBotao}>Enviar</Text>
            </TouchableOpacity>
        </View>

    );
}
