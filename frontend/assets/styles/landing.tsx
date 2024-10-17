import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    balao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#053D6E',
        padding: 10,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        width: "90%",
    },

    logo: {
        width: 50,
        height: 50,
        alignSelf: "flex-start",
        resizeMode: "contain",
    },

    titulo: {
        marginTop: 5,
        marginRight: 75,
        fontSize: 32,
    },

    tituloFin: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    tituloTrack: {
        color: '#FF7D01',
    },

    storysetImagem: {
        width: '95%',
        height: "66%",
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    containerBotao: {
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },

    botaoLogar: {
        backgroundColor: '#053D6E',
        borderRadius: 40,
        marginBottom: 70,
        padding: 15,
        alignItems: "center",
        width: "90%",
    },

    botaoCadastrar: {
        backgroundColor: '#0188EA',
        borderRadius: 40,
        marginBottom: 15,
        padding: 15,
        alignItems: "center",
        width: "90%",
    },

    textoBotao: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: "bold",
    },

});