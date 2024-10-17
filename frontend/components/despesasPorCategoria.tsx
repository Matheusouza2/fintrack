import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

// Um exemplo de json de despesas para vim do back
const despesas = [
    {
      "categoria": "Alimentação",
      "valor_total": 1500
    },
    {
      "categoria": "Transporte",
      "valor_total": 250
    },
    {
      "categoria": "Habitação",
      "valor_total": 1200
    },
    {
      "categoria": "Educação",
      "valor_total": 400
    },
    {
      "categoria": "Lazer",
      "valor_total": 300
    },
    {
      "categoria": "Saúde",
      "valor_total": 600
    }
  ]


// Seed para gerar cores no gráfico
const seed = 54;

// Função para criar um gerador aleatório baseado em seed
const seededRandom = (seed:any) => {
    let value = seed;
    return () => {
      value = (value * 9301 + 49297) % 233280;
      return value / 233280;
    };
  };

// Função para gerar cores aleatórias a partir de um gerador de números pseudoaleatórios
const randomColorWithSeed = (randomFunc:any) => {
  return '#' + ((randomFunc() * 0xffffff) << 0).toString(16).padEnd(6, '0').slice(0, 6);
};

const popularData = (json:any) => {
  let data:any = []

  json.forEach( element => {
      data.push(element.valor_total)
  });

  return data
};

export default function DespesasPorCategoria () {
  const data = popularData(despesas)



  const randomFunc = seededRandom(seed);

  // Colocar slice de forma consistente
  const colors = data.map(() => randomColorWithSeed(randomFunc));

  const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: colors[index],
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))

  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleCorandomColorntainer}>
              <Text style={styles.titleCard}>Despesas por categoria</Text>
      </View>

      <View style={styles.graficoContainer}>   
        <PieChart style={{ height: 150,width:150}} data={pieData}/>
        <View style={[{justifyContent:"center"}]}>
          {colors.map( (value,index) => {
            return <View style={[{flexDirection:"row", alignItems:"center"}]}>
                    <View style={[styles.legendaBox,{backgroundColor:`${value}`}]}></View>
                    <Text style={styles.legendaText}>{`${despesas[index].categoria}`}</Text>
                   </View>
          })}
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer:{
    width:"100%",
    margin:20,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    backgroundColor:"#FFFFFF",
  },
  titleContainer:{
    justifyContent:"flex-start",
  },
  titleCard:{
    fontFamily:"Roboto",
    color:"#727272",
    fontSize:18,
    marginBottom:5
    },
    graficoContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    legendaBox:{
      height:10,width:10, 
      marginHorizontal:5
    },
    legendaText:{
      fontFamily:"Roboto",
      color:"#727272"
    }
});