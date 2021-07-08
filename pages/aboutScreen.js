import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
      <Text
        style={styles.link}
        onPress={() => {
          Linking.openURL("https://beotura.edukacija21.com");
        }}
      >
        Visit Us
      </Text>
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
    fontSize: 20,
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
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#007aff",
  },
});

export default about;

// Mi smo beogradski srednjoškolci i otkrivamo zanimljivu stranu beogradske
// istorije. Ustvari, istražujemo i fotografišemo skrivene dragulje
// Beograda u kojima sada možete i vi da uživate! Izaberite svoju turu, i
// započnite svoju beogradsku avanturu sa nama! Ako želite da saznate više,
// posetite našu veb stranicu.
