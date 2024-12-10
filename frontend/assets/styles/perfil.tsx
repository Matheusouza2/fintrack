import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#053d6e",
        width: width,
        height: height,
        paddingTop: 50,
    },

    logo: {
        marginLeft: "5%",
        width: "40%",
        height: "10%",
        resizeMode: "contain",
        alignSelf: "flex-start",
        position: "absolute",
        top: 10,
    },


    text: {
        fontSize: 25,
        padding: 3,
        color: "#fff",
    },

    esqueceu: {
        position: "absolute",
        alignSelf: "center",
        bottom: 20,
        color: "#fff",
    },


    input: {
        width: "80%",
        backgroundColor: "#ffffff",
        height: 50,
        fontSize: 18,
        borderRadius: 10,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        borderColor: "#053d6e",
        marginBottom: 15,
    },


    viewInput: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: "center",
        justifyContent: "center",
    },


    viewAll: {
        flex: 1,
        width: "100%",
        padding: 20,
        backgroundColor: "#d9d9d9",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: height * 0.1,
    },


    button: {
        backgroundColor: "#053d6e",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 20,
    },


    buttonIcon: {
        width: height * 0.2,
        height: height * 0.2,
        backgroundColor: "#d9d9d9",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -height * 0.1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },


    image: {
        width: "70%",
        height: "70%",
        borderRadius: 35,
    },


    editButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: height * 0.04,
        height: height * 0.04,
        backgroundColor: "#053d6e",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 3,
    },


    editImage: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
    },


    voltar: {
        position: "absolute",
        resizeMode: "contain",
        top: 40,
        left: 20,
        width: 25,
        height: 28,
    },


    textoPerfil: {
        fontFamily: "roboto",
        fontSize: 32,
        fontWeight: '400',
        lineHeight: 37.5,
        color: '#000000',
        alignSelf: 'center',
        marginTop: 10,
    },


    textoNome: {
        fontFamily: "roboto",
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 23.44,
        textAlign: 'left',
        color: '#616161',
        alignSelf: 'flex-start',
        marginLeft: "10%",
        marginBottom: 10,
    }
});