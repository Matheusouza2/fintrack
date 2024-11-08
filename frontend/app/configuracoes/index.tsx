import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from "../../assets/styles/configuracoes";
import { Link } from 'expo-router';
const Configuracoes = () => {
    return (
        <View style={styles.principalView}>
            <View style={styles.cabecalhoPrincipal}>
            </View>
            <TouchableOpacity style={styles.botaoDeVoltar} accessibilityLabel="Voltar">
                <Image source={require('../../assets/icons/arrowBack.svg')} style={styles.iconeBotaoDeVoltar} />
            </TouchableOpacity>
            <View style={styles.configuracoesContainer}>
                <View style={styles.fotoENomeContainer}>
                    <Image source={require("../../assets/icons/image.png")} style={styles.fotoUsuario} />
                    <View style={styles.nomeEEmailContainer}>
                        <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
                        <Text style={styles.emailUsuario}>email@usuario.com</Text>
                        <TouchableOpacity style={styles.botaoEditarPerfil} accessibilityLabel="Editar Perfil">
                            <Link href="/perfil">
                                <Text style={styles.textoEditarPerfil}>Editar Perfil</Text>
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.categoriasContainer}>Categorias</Text>
            </View>
        </View>
    );
};
export default Configuracoes;