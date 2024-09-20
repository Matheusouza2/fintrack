import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import DespesasPorCategoria from "./despesasPorCategoria/DespesasPorCategoria"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#EDEDEB",
        paddingHorizontal:10
      }}
    >
      <DespesasPorCategoria/>
      <Link href="/splashScreen">Splash</Link>
      <Link href="/novaConta">Nova Conta</Link>
    </View>
  );
}