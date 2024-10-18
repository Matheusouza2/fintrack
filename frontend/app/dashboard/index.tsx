import { View, StyleSheet } from "react-native";
import React from "react";
import Overview from "../../components/Overview";
import ContasdosBancos from "../../components/contasDosBancos";
import Card from "../../components/card";
import DespesasPorCategoria from "../../components/despesasPorCategoria";

export default function Indice() {
  return (
<View>

    <View>
      <Overview/>
    </View>
    
    <View>
      <ContasdosBancos/>
    </View>

    <View>
      <Card/>
    </View>

    <View>
      <DespesasPorCategoria/>
    </View>

</View>

  );
}
