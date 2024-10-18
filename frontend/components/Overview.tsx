import React from "react";
import { Image, Text, View } from "react-native";

/*Importa os estilos definidos no arquivo "Overview", que está localizado em "assets/styles".
 O "styles" contém classes de estilo usadas para formatar os componentes.*/
import { styles } from "@/assets/styles/Overview";

/*Define um componente funcional chamado "Item".
 Este componente recebe como parâmetros "title" e "img" e retorna uma estrutura de visualização (View). */
function Item({ title, img }) {
    return (
        <View style={styles.item}>
            <View style={styles.section}>
                <Image source={img} />

                <View>
                    <Text style={styles.recipes}>{title}</Text>
                    <Text style={styles.prev}>Previsto</Text>
                </View>
            </View>
            <View>
                <Text style={styles.value1}>R$ 0,00</Text>
                <Text style={styles.value2}>R$ 0,00</Text>
            </View>
        </View>
    )
}

export default function Overview() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Visão Geral</Text>
            <View style={styles.items}>
                <Item title={"Receitas"} img={require('../assets/icons/mais.png')} />
                <Item title={"Despesas"} img={require('../assets/icons/menos.png')} />
            </View>
        </View>
    )
}