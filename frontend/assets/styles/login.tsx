import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // estilo do container
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        position: "relative",
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
        marginBottom: 50,
        color: "#333",
        fontSize: 22,
        borderRadius: 15,
        padding: 10,
        borderWidth: 2,
        borderColor: "#56aaff",
    },


    // estilo do botão de login
    button: {
        backgroundColor: "#0a2f6e",
        width: "70%",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 37,
        position: "absolute",
        bottom: '20%',
    }
});