import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // estilo do container
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#053d6e",
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
        width: "80%",
        backgroundColor: "#fff",
        height: width * 0.1,
        marginBottom: 30,
        color: "#333",
        fontSize: 22,
        borderRadius: 5,
        padding: 15,
        borderWidth: 2,
        borderColor: "#053d6e",
    },

    //view do input
    viewInput: {
        width: "100%",
        height: "55%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        bottom: 70,
    },

    //view que engloba o botão tudo
    viewAll: {
        top: "20%",
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#d9d9d9",
        bottom: 0,
        borderRadius: 20,
    },


    // estilo do botão de salvar
    button: {
        backgroundColor: "#0a2f6e",
        width: "70%",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 37,
        position: "absolute",
        bottom: "2%",
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
        top: "1%",
        left: "1%",
        width: "10%",
    },

    // estilo do icone de editar

});