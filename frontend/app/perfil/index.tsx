import React, { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View, Platform } from "react-native";
import { styles } from "../../assets/styles/perfil";
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
    const texto = styles.text;
    const [photo, setPhoto] = useState < string | null > (null);

    const handleEditPhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            if (response.assets && response.assets.length > 0) {
                setPhoto(response.assets[0].uri || null);
            }
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            {/* Botão de voltar */}
            <Image source={require('../../assets/icons/iconeVoltar.png')} style={styles.voltar} />

            {/* View que engloba tudo */}
            <View style={styles.viewAll}>

                {/* Perfil */}
                <View style={styles.buttonIcon}>
                    <Image source={photo ? { uri: photo } : require('../../assets/icons/perfil.png')} style={styles.image} />

                    {/* Botão de editar alinhado */}
                    <TouchableOpacity style={styles.editButton} onPress={handleEditPhoto}>
                        <Image source={require('../../assets/icons/edit.png')} style={styles.editImage} />
                    </TouchableOpacity>

                    <Text style={styles.textoPerfil}>Perfil</Text>
                </View>

                {/* View que engloba os inputs */}
                <View style={styles.viewInput}>
                    {/* Input do nome */}
                    <Text style={{ ...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize: 20, fontFamily: 'roboto', fontWeight: '400' }}>Nome</Text>
                    <TextInput
                        textContentType="username"
                        autoCapitalize="none"
                        autoComplete="username"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    {/* Input do email */}
                    <Text style={{ ...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize: 20, fontFamily: 'roboto', fontWeight: '400' }}>Email</Text>
                    <TextInput
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    {/* Input do CPF */}
                    <Text style={{ ...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize: 20, fontFamily: 'roboto', fontWeight: '400' }}>CPF</Text>
                    <TextInput
                        keyboardType="numeric"
                        textContentType="username"
                        autoComplete="username"
                        autoCorrect={false}
                        style={styles.input}
                    />
                </View>

                {/* Botão de salvar */}
                <TouchableOpacity style={styles.button}>
                    <Text style={{ ...texto, color: '#fff' }}>Salvar</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}