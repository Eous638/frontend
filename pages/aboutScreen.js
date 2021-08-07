import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import beoturaEkipa from "../assets/beoturaEkipa.png";
import { Linking } from "react-native";

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is our story</Text>
      <Image source={beoturaEkipa} style={styles.image} />
      <Text style={styles.discText}>
        We are high school students from Belgrade and we are discovering an
        interesting side of Belgrade history. In fact, we explore and photograph
        hidden gems Belgrade, which you can now enjoy! Choose your tour, and
        start your Belgrade adventure with us! If you want to know more, visit
        our website.
      </Text>
      <Pressable
        style={styles.link}
        onPress={() => {
          Linking.openURL("https://beotura.edukacija21.com");
        }}
      >
        <Text style={styles.text}>VISIT US</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    paddingBottom: 30,
  },
  image: {
    width: "90%",
    height: "30%",
    borderRadius: 15,
  },
  discText: {
    paddingTop: 40,
    padding: 20,
    fontSize: 17,
    color: "#111111",
  },
  link: {
    width: 150,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#FF4848",
    borderRadius: 25,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default about;

// Mi smo beogradski srednjoškolci i otkrivamo zanimljivu stranu beogradske
// istorije. Ustvari, istražujemo i fotografišemo skrivene dragulje
// Beograda u kojima sada možete i vi da uživate! Izaberite svoju turu, i
// započnite svoju beogradsku avanturu sa nama! Ako želite da saznate više,
// posetite našu veb stranicu.
