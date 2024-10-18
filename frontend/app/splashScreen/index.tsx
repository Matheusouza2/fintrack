import { Text, View, Image } from "react-native";
import { styles } from "../../assets/styles/splashScreen.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.itens}>
        <Image
          source={require("../../assets/images/logo.png")}
        />
        <View style={styles.circuloPai}>

          <View style={[styles.circuloAzulEscuro, styles.circulo]}>

          </View>
          <View style={[styles.circuloAzulClaro, styles.circulo]}>

          </View>
          <View style={[styles.circuloLaranja, styles.circulo]}>

          </View>


        </View>

      </View>
    </View>
  );
}