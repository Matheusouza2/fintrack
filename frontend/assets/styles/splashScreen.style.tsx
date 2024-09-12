import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#053D6E",
        justifyContent:"center",
        alignItems: "center"
    },
    circulo: {
        width: 43,
        height: 43,
        borderRadius: 50,                                                     
    },
    circuloPai: {
        width: 163,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itens: {
        height: 306,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    circuloAzulEscuro: {
        backgroundColor: "#0188EA"
    },
    circuloAzulClaro: {
        backgroundColor: "#01A6FF"
    },
    circuloLaranja: {
        backgroundColor: "#FF7D01"
    }


})