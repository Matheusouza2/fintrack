import DespesasPorCategoria from "../components/despesasPorCategoria";
import { View } from "react-native";
import { Link } from "expo-router";
import FinancialIconsBar from "../components/menuDenavegacao"

export default function Index() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDEDEB",
        paddingHorizontal: 10
      }}
    >
      <DespesasPorCategoria />
      <Link href="/splashScreen">Splash</Link>
      <Link href="/novaConta">Nova Conta</Link>
      <Link href="/novaTraferencia">Nova Transferencia</Link>
      <FinancialIconsBar/>

    </View>
    
  );
}