import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // estilo do container
    container: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#053d6e",
        width: 430,
        height: 932,
    },

    // estilo do logo
    logo: {
        marginLeft: "5%",
        width: "40%",
        height: "10%",
        resizeMode: "contain",
        alignSelf: "flex-start",
        position: "absolute",
        top: 0,
    },

    // estilo padrão do texto
    text: {
        fontSize: 25,
        padding: 3,
    },

    // estilo do texto de esqueceu a senha
    esqueceu: {  
        position: "absolute",
        alignSelf: "center",
        bottom: 0,
        
    },

    // estilo do input de texto
    input: {
        width: 360,
        backgroundColor: "#ffffff",
        height: 70,
        // marginBottom: 30,
        // color: "#333",
        fontSize: 22,
        borderRadius: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: "#053d6e",
    },

    //view do input
    viewInput: {
        width: "100%",
        height: "55%",
        top: 50,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        bottom: 70,
    },

    //view que engloba o botão tudo
    viewAll: {
        top: 207,
        width: 430,
        height: 725,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#d9d9d9",
        bottom: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },


    // estilo do botão de salvar
    button: {
        backgroundColor: "#053d6e",
        width: 320,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        position: "absolute",
        bottom: "2%",
        top: 600
    },

    // estilo do botão de perfil
    buttonIcon: {
        width: height * 0.2,
        height: height * 0.2,
        backgroundColor: "#d9d9d9",
        position: "absolute",
        borderRadius: 100,
        top: "-15%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },

    // estilo do icone de perfil
    image: {
        resizeMode: "contain",
        width: "70%",
        position: "absolute",
        alignSelf: "center",
        top: "-8%",
    },

    // estilo do botão de editar
    editButton: {
        width: height * 0.03,
        height: height * 0.03,
        backgroundColor: "#053d6e",
        borderRadius: 100,
        right: "-85%",
        top: "70%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,

    },
    editImage: {
        resizeMode: "contain",
        width: "70%",
        position: "absolute",
        alignSelf: "center",
        top: "-210%",
    },

    // estilo do botão de voltar
    voltar:{
        position: "absolute",
        resizeMode: "contain",
        top: 19,
        left: 21,
        width: 25,
        height: 28,
    },

    textoPerfil:{
        width: 74,
        height: 38,
        top: 213,
        left: 55,
        fontFamily: "roboto",
        fontSize: 32,
        fontWeight: 400,
        lineHeight: 37.5,
        color: '#000000'

    },

    textoNome:{
        
        width: 54,
        height: 23,
        top: 380,
        left: 44,
        fontFamily: "roboto",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 23.44,
        textAlign: 'center',
        color: '#616161',
    }

    // estilo do icone de editar

});