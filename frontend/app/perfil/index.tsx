import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image, View} from "react-native";
import { styles } from "../../assets/styles/perfil";
import React, {useState}from "react";

export default function App({route}) {
    // texto padrão improtado como constante
    const texto = styles.text;

    // Pegando o ID do usuário passado via parâmetro
    const { id } = route.params;

    // Estados para armazenar os inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");

    const salvarDados = async () => {
        try {
          const response = await axios.put(`http://localhost:9090/api/usuarios/${id}`, {
            nome,
            email,
            cpf,
          });
          // Sucesso
          Alert.alert("Sucesso", "Dados atualizados com sucesso!");
        } catch (error) {
          console.error(error);
          Alert.alert("Erro", "Não foi possível atualizar os dados.");
        }
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
                value={nome}
                onChangeText={setNome}
            />

            {/* input do email */}
            <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize:20, fontFamily:'roboto', fontWeight:400}}>Email</Text>
            <TextInput 
                textContentType="emailAddress"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            {/* input do cpf */}
            <Text style={{...texto, color: 'grey', alignSelf: 'flex-start', marginLeft: '10%', fontSize:20, fontFamily:'roboto', fontWeight:400}}>CPF</Text>
            <TextInput 
                keyboardType="numeric"
                textContentType="username"
                autoComplete="username"
                autoCorrect={false}
                style={styles.input}
                value={cpf}
                onChangeText={setCpf}
            />
        </View>


            {/* botão de slavar */}
            <TouchableOpacity style={styles.button} onPress={salvarDados}> 
                <Text style={{...texto, color: '#fff'}}>Salvar</Text>
            </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}