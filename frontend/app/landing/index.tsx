import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/landing";


export default function Landing() {

    return (
        <View style={styles.container}>
            <View style={styles.balao}>
                <Image source={require('../../assets/imagens/Nubank.png')} style={styles.logo} />
                <Text style={styles.titulo}>
                    <Text style={styles.tituloFin}>Fin</Text>
                    <Text style={styles.tituloTrack}>track</Text>
                </Text>
            </View>


            <Image source={require('../../assets/imagens/finance-app-amico.svg')} style={styles.storysetImagem} />


            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botaoLogar}>
                    <Link href="/login">
                        <Text style={styles.textoBotao}>Login</Text>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoCadastrar}>
                    <Link href="/cadastroUsuario">
                        <Text style={styles.textoBotao}>Cadastre-se</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    );
}