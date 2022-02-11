import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useState} from 'react';

export default function Language() {
  const [lang1, setLang1] = useState(styles.button);
  const [lang2, setLang2] = useState(styles.button);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Preferred Language</Text>

      <TouchableOpacity style={lang1} >
        <Text>
          Srpski
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={lang2} >
        <Text>
          English
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    paddingLeft: 15,
    paddingBottom: 50,
  },
  button: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#16b8f3",
    margin: 10,
  },
  active: {
      width: "85%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "red",
      margin: 10,
    }
});
