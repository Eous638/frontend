import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { descriptionStoreContext } from "../states/descriptionScreenState";
import { IconButton, Colors } from "react-native-paper";


const detailsScreen = observer(({ navigation }) => {
  const detailStore = useContext(descriptionStoreContext);
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
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTxt}>ZAPOČNI PUT</Text>
        </Pressable>
        <Text style={styles.desc}>{detailStore.desc}</Text>
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
