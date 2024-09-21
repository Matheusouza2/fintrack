import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import { styles } from '../assets/styles/card';

export default function Card() {
  const progress = 0.9;
  const percentage = Math.round(progress * 100);
  const receitasConsideradas = 1000;
  const receitasDesconsideradas = 200;

  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Economia Mensal</Text>
      <View style={styles.contentContainer}>
        <View style={styles.progressContainer}>
          <ProgressCircle
            style={styles.progressCircle}
            progress={progress}
            progressColor={styles.text.color}
            animate={true}
            animateDuration={2000}
            cornerRadius={500}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{percentage} %</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Receitas consideradas</Text>
            <Text style={styles.valueTextGreen}>R$ {receitasConsideradas}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Despezas consideradas</Text>
            <Text style={styles.valueTextRed}>R$ {receitasDesconsideradas}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}