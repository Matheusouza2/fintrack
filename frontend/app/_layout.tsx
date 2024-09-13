import { router, Stack } from "expo-router";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from "react-native";

//const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />

      {/* Declaração de rota e edição de cabeçalho*/ }
      <Stack.Screen name="RecuperarSenha"  
      options={{
          
          title: 'Recuperar Senha',
          headerTitleAlign: 'center',
          headerStyle: { 
            backgroundColor: '#053D6E',
          },
          headerTintColor: '#C3C3C3',
          headerTitleStyle: {
            fontWeight: 'light',
          },

          headerLeft: () => (
            <View style={{
                width: 40, 
                height: 40, 
                borderWidth: 2,           // Largura do traçado
                borderColor: 'gray',     // Cor do traçado
                justifyContent: 'center', // Centralizar o conteúdo
                alignItems: 'center',     // Centralizar o conteúdo
                borderRadius: 2,          // Cantos arredondados (opcional)
              }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              
              <Image source={require('../images/setaEsquerda.png')} style={{ width: 25, height: 25, marginLeft: 10 }}/>
            </TouchableOpacity>
            </View>
          )

        }}/>

    </Stack>
  );
}
