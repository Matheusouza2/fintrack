import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/perfil";

export default function App() {
    const texto = styles.text;

    const [cpf, setCpf] = useState('');


    const handleCpfChange = (text:string) => {
        const onlyNumbers = text.replace(/\D/g, ''); 
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
        // container
        <KeyboardAvoidingView style={styles.container}>
            {/* botão de voltar */}
            <Image source={require('../../assets/icons/iconeVoltar.png')} style={styles.voltar}/> 
            
            {/* View que engloba tudo */}
            <View style={styles.viewAll}>

                {/* perfil */}
                <TouchableOpacity style={styles.buttonIcon}>
                    <Image source={require('../../assets/icons/perfil.png')} style={styles.image}/> 

                    {/* botão de editar */}
                    <TouchableOpacity style={styles.editButton}>
                        <Image source={require('../../assets/icons/edit.png')} style={styles.editImage}/>
                    </TouchableOpacity>    

                    {/* texto do perfil */}
                    <Text style={{...texto, position: "absolute", alignSelf: "center", top: "110%"}}>Perfil</Text>
                </TouchableOpacity>

                {/* view que engloba os inputs */}
                <View style={styles.viewInput}>
                    {/* input do nome */}
                    <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%'}}>Nome</Text>
                    <TextInput 
                        textContentType="username"
                        autoCapitalize="none"
                        autoComplete="username"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    {/* input do email */}
                    <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%'}}>Email</Text>
                    <TextInput 
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    {/* input do CPF */}
                    <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%'}}>CPF</Text>
                    <TextInput 
                        keyboardType="numeric"
                        textContentType="username"
                        autoComplete="username"
                        autoCorrect={false}
                        style={styles.input}
                        value={cpf}
                        onChangeText={handleCpfChange}
                        maxLength={14} // (formato 000.000.000-00)
                    />
                </View>

                {/* botão de salvar */}
                <TouchableOpacity style={styles.button}> 
                    <Text style={{...texto, color: '#fff'}}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}
