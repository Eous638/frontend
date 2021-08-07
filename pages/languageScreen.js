import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Language() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Preferred Language</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    paddingLeft: 15,
  },
});
