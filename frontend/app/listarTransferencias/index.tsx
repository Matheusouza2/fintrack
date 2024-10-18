import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from '../../assets/styles/listarTransferencias';

const Item = ({ origemNome, destinoNome, valor, data }) => {
  return (
    <View style={styles.container_dados}>
      <View style={styles.dados}>
        <View style={styles.image_container}>
          <Text style={styles.label}>Origem</Text>
          <Text>{origemNome}</Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text1}>{`De: ${origemNome} Para: ${destinoNome}`}</Text>
          <Text style={styles.text2}>{`R$ ${valor.toFixed(2)}`}</Text>
          <Text style={styles.text3}>{data}</Text>
        </View>
      </View>
      <View style={styles.image_container}>
        <Text style={styles.label}>Destino</Text>
        <Text>{destinoNome}</Text>
      </View>
    </View>
  );
};

export const Header = () => {
  const [transferencias, setTransferencias] = useState([]);

  
  const fetchTransferencias = async () => {
    try {
      const response = await axios.get('http://localhost:3000/transferencias');
      setTransferencias(response.data);
    } catch (error) {
      console.error('Erro ao buscar transferências:', error);
    }
  };

  
  useEffect(() => {
    fetchTransferencias();
  }, []);

  return (
    <>
      {/* Header */}
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

      {/* Lista de transferências */}
      <FlatList
        data={transferencias}
        renderItem={({ item }) => (
          <Item
            origemNome={item.conta.nome} 
            destinoNome={item.conta_2.nome} 
            valor={item.valor}
            data={new Date().toLocaleDateString()} 
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Rodapé */}
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
