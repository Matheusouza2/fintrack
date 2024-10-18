/* Importa o módulo StyleSheet da biblioteca "react-native".
O StyleSheet é utilizado para definir e organizar estilos no React Native.*/
import { StyleSheet } from "react-native";

/* Exporta um objeto de estilos chamado "styles" que contém várias classes de estilo.*/
export const styles = StyleSheet.create({
    /*Estilo para o contêiner principal.
     Define a cor de fundo como branca, espaçamento vertical e horizontal, largura de 300, 
    espaçamento entre os itens internos (gap) e bordas arredondadas.*/
    container: {
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: 300,
        gap: 8,
        borderRadius: 8
    },
    /*Estilo para os itens dentro do contêiner.
     Organiza os itens em uma linha e distribui o espaço entre eles de forma uniforme.*/
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    /*Estilo para grupos de itens.
     Define um espaçamento maior entre os itens desse grupo.*/
    items: {
        gap: 16
    },
    /*Estilo para seções dentro do contêiner.
    Organiza os itens da seção em linha, com alinhamento central e um pequeno espaçamento entre eles*/
    section: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
    },
    recipes: {
        fontSize: 16,
    },
    prev: {
        fontSize: 12,
    },
    value1: {
        fontSize: 16,
    },
    value2: {
        fontSize: 12,
    },
})