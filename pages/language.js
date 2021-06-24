import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Language() {
  return (
    <View style={styles.container}>
      <Text>Ide gas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
