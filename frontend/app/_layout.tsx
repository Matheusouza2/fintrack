import { router, Stack } from "expo-router";

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
            <Button onPress={() => router.push('login')}  // Botão de voltar manual
              color="#000"
            />
          )

        }}/>

    </Stack>
  );
}
