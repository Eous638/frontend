import { observer } from "mobx-react-lite";
import React, { useContext , useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground, BackHandler,
} from "react-native";
import { descriptionStoreContext } from "../states/descriptionScreenState"
import { languageStoreContext } from "../states/languageState";
import { IconButton, Colors } from "react-native-paper";


const detailsScreen = observer(({ navigation }) => {
  const detailStore = useContext(descriptionStoreContext);
  const langStore = useContext(languageStoreContext);
  const [lang, setLang] = useState("");
  const [expand, setExpand] = useState(false);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigation.canGoBack()){
        navigation.goBack();
        return true;
      }
    });
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLang(langStore.language);
    });

    return unsubscribe;
  }, [navigation]);
  const l10n = {
    'button': {en: 'Start your trip', sr: 'Započni svoj put'},

}
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: detailStore.image }}
          imageStyle={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >

          <IconButton
            style={styles.arrow}
            icon="arrow-left"
            color={Colors.black}
            size={35}
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>
        <Text style={styles.title}>{detailStore.title}</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Direction')}>
          <Text style={styles.buttonTxt}>{l10n['button'][lang]}</Text>
        </Pressable>
        <Text  style={styles.desc} >{detailStore.desc}</Text>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Bold",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  arrow: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  button: {
    width: 150,
    height: 50,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FF4848",
    marginBottom: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonTxt: {
    color: "white",
    fontWeight: "bold",
  },
  desc: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 5,
    color: "#343634",
    marginBottom: 30,
  },
});
export default detailsScreen;
