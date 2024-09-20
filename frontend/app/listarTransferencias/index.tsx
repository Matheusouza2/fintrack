import React from 'react';
import { View, Text, Image} from 'react-native';
import {styles} from '../../assets/styles/listarTransferencias'

const Item = () => {
  return (
    <View>
      <View style={styles.container_dados}>
        <View style={styles.dados}>
          <View style={styles.image_container}>
            <Text>Origem</Text>
            <Image 
            source={require("../../assets/icons/Rectangle 5.png")}
            style={styles.icon}/>
          </View>
          <View>
            <Text style={styles.text1}>Descrição</Text>
            <Text style={styles.text2}>R$ 0,00</Text>
            <Text style={styles.text3}>01/01/2024</Text>
          </View>
        </View>
        <View style={styles.image_container}>
          <Text>Destino</Text>
          <Image 
          source={require("../../assets/icons/Rectangle 18.png")}
          style={styles.icon}/>
        </View>
      </View>
    </View>
  )
}

export const Header = () => {
  const transferencias = []
  return (
  <>
    <View style={styles.header}>
      <Text style={styles.texto_header}>Transferências</Text>
      <Image
      source={require("../../assets/icons/add.png")}
      style={styles.imagem_add}
      />
      <Image 
      source={require("../../assets/icons/pesquisa.png")}
      style={styles.imagem_pesquisa}
      />
      <Image 
      source={require("../../assets/icons/filtro.png")}
      style={styles.imagem_filtro}
      />
    </View>

    <View style={styles.items}>
      {transferencias.map(transferencia => (<Item />))}
    </View>
    
      <View style={styles.container_inferior}>
        <View style={styles.opcoes_inferior}>
        <Image 
      source={require("../../assets/icons/elemento_1.png")}
      style={styles.opcao_1}
      />
        <Image 
      source={require("../../assets/icons/elemento_2.png")}
      style={styles.opcao_2}
      />
      <Image 
      source={require("../../assets/icons/elemento_3.png")}
      style={styles.opcao_3}
      />
      <Image 
      source={require("../../assets/icons/elemento_4.png")}
      style={styles.opcao_4}
      />
      <Image 
      source={require("../../assets/icons/elemento_5.png")}
      style={styles.opcao_5}
      />
      </View>
      </View>
  </>
  );
};

export default Header;

