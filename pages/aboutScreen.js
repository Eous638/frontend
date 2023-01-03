import React, {useState, useContext} from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import beoturaEkipa from "../assets/beoturaEkipa.png";
import { Linking } from "react-native";
import { languageStoreContext } from "../states/languageState";
const About = observer(({navigation}) => {
  const langStore = useContext(languageStoreContext);
  const [lang, setLang] = useState("");
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLang(langStore.language);
    });

    return unsubscribe;
  }, [navigation]);

  const l10n = {
    'button': {en: 'VISIT US', sr: 'POSETI NAS'},
    'title': {en: 'This is our story', sr: 'Ovo je naša priča'},
    'text' : {en: "We are high school students from Belgrade and we are discovering an interesting side of Belgrade history. In fact, we explore and photograph hidden gems Belgrade, which you can now enjoy! Choose your tour, and start your Belgrade adventure with us! If you want to know more, visit our website.",
  sr: "Mi smo srednjoškolci iz Beograda i otkrivamo interesantnu stranu Beogradske istorije. Istražujemo i fotografišemo skrivena blaga našeg grada, koje sada možete i sami iskusiti! Odaberite svoju turu i prepustite se u Beogradsku Avanturu sa nama! Ako želite da saznate više, posetite našu web stranicu."},
}
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{l10n['title'][lang]}</Text>
      <Image source={beoturaEkipa} style={styles.image} />
      <Text style={styles.discText}>
        {l10n['text'][lang]}
      </Text>
      <Pressable
        style={styles.link}
        onPress={() => {
          Linking.openURL("https://beotura.rs/");
        }}
      >
        <Text style={styles.text}>{l10n['button'][lang]}</Text>
      </Pressable>
    </View>
  );
});

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
    backgroundColor: "#16b8f3",
    borderRadius: 25,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default About;

// Mi smo beogradski srednjoškolci i otkrivamo zanimljivu stranu beogradske
// istorije. Ustvari, istražujemo i fotografišemo skrivene dragulje
// Beograda u kojima sada možete i vi da uživate! Izaberite svoju turu, i
// započnite svoju beogradsku avanturu sa nama! Ako želite da saznate više,
// posetite našu veb stranicu.
