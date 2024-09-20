import { Text, View } from "react-native";

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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <DespesasPorCategoria/>
    </View>
  );
}