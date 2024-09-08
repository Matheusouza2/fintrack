import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "@/components/header/header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header /> 
      <ScrollView style={styles.content}>
        <Text style={styles.title}>...</Text>

        <View style={styles.box}>
          <Text>...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 20,
  },
});
