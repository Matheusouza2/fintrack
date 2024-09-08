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
    height: "90px",
    width: "100%",
    padding: 16,
    backgroundColor: "#053D6E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
  },
  backButtonContainer: {
    position: "absolute",
    left: 16,
    border: "1px solid #0188EA",
    borderRadius: 20,
    padding: "15px"
  },
  arrowStyle: {
    width: "28px",
    height: "25px",
  },
  headerTitle: {
    fontSize: 30,
    color: "#C3C3C3",
    fontFamily: "Roboto, sans",
  },
});
