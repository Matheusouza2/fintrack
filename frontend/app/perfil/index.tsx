import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View} from "react-native";
import { styles } from "../../assets/styles/perfil";
import React from "react";

export default function App() {
    // texto padrão improtado como constante
    const texto = styles.text;

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
                <Text style={styles.textoPerfil}>Perfil</Text>
                </TouchableOpacity>


        {/* view que engloba os inputs */}
            <View style={styles.viewInput}>
            {/* input do nome */}
            <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize:20, fontFamily:'roboto', fontWeight:400}}>Nome</Text>
            <TextInput 
                textContentType="username"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect={false}
                style={styles.input}
            />

            {/* input do email */}
            <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize:20, fontFamily:'roboto', fontWeight:400}}>Email</Text>
            <TextInput 
                textContentType="emailAddress"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                style={styles.input}
            />

            {/* input do cpf */}
            <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize:20, fontFamily:'roboto', fontWeight:400}}>CPF</Text>
            <TextInput 
                keyboardType="numeric"
                textContentType="username"
                autoComplete="username"
                autoCorrect={false}
                style={styles.input}
            />
        </View>


            {/* botão de slavar */}
            <TouchableOpacity style={styles.button}> 
                <Text style={{...texto, color: '#fff'}}>Salvar</Text>
            </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}