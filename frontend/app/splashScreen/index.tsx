import { Text, View, Image } from "react-native";
import { styles } from "./splashScreen.style";

export default function Index() {
  return (
    <View style={styles.container}>
        <View style={styles.itens}>
      <Image
      source={require("../../assets/imagens/logo.png")}
      />
      <View style={styles.circuloPai}>

        <View style= {[styles.circuloAzulEscuro, styles.circulo]}>

        </View>
        <View style= {[styles.circuloAzulClaro, styles.circulo]}>

        </View>
        <View style= {[styles.circuloLaranja, styles.circulo]}>

        </View>


      </View>

        </View>
    </View>
  );
}