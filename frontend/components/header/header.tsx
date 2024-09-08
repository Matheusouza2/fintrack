import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


export default function Header() {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
        >
          <Image
            source={require("../../assets/icons/arrow.png")}
            style={styles.arrowStyle}

          />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Nova Conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    height: 90,
    width: "100%",
    padding: 16,
    backgroundColor: "#053D6E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  backButtonContainer: {
    position: "absolute",
    left: 16,
    borderWidth: 1,
    borderColor: "#0188EA",
    borderRadius: 20,
    padding: 15,
  },
  arrowStyle: {
    width: 30,
    height: 25,
  },
  headerTitle: {
    fontSize: 30,
    color: "#C3C3C3",
    fontFamily: "Roboto, sans",
  },
});
