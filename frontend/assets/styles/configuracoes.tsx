import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    principalView: {
        flex: 1,
        backgroundColor: "#d8d8d8",
    },

    categoriasContainer: {
        flex: 1,
        backgroundColor: "#d8d8d8",
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },

    cabecalhoPrincipal: {
        height: 50,
        width: "100%",
        padding: 16,
        backgroundColor: "#d8d8d8",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "relative",
    },
    botaoDeVoltar: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    iconeBotaoDeVoltar: {
        width: 24,
        height: 24,
    },
    configuracoesContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#d8d8d8',
    },
    fotoENomeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#d8d8d8",
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    fotoUsuario: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'cover',
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: "#053d6e",
    },
    nomeEEmailContainer: {
        flex: 1,
    },
    nomeUsuario: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    emailUsuario: {
        fontSize: 16,
        color: '#555',
    },
    botaoEditarPerfil: {
        backgroundColor: '#053d6e',
        padding: 10,
        borderRadius: 30,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoEditarPerfil: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});