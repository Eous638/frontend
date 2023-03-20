import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Image,
  Modal,
  Text,
  View,
  Pressable,
  ScrollView,
  ImageBackground, BackHandler,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { observer } from "mobx-react-lite";
import { descriptionStoreContext } from "../states/descriptionScreenState";
import { IconButton, Colors } from "react-native-paper";
import { languageStoreContext } from "../states/languageState";
const Direction = observer(({ navigation }) => {
  const detailStore = useContext(descriptionStoreContext);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [lat, setLat] = useState(detailStore.startlat);
  const [long, setLong] = useState(detailStore.startlang);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMarker, setActiveMarker] = useState([]);
  const langStore = useContext(languageStoreContext);
  const [lang, setLang] = useState("");
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLang(langStore.language);
    });

    return unsubscribe;
  }, [navigation]);
  const GOOGLE_MAPS_APIKEY = "AIzaSyBN_JUnf-Anvm3Z7S0QdWdH7F6eJTLyiIA";

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigation.canGoBack()){
        navigation.goBack();
        return true;
      }
    });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Balanced,
          distanceInterval: 100,
          timeInterval: 100000,
        },
        (location) => {
          setLat(parseFloat(location.coords.latitude));
          setLong(parseFloat(location.coords.longitude));
        }
      );
    })();
  }, []);
  useEffect(() => {
    setMarkers(detailStore.markers);
  }, []);
  var sortedMarkers = detailStore.markers.sort(function (a, b) {
    return a.ordering - b.ordering;
  });

  const coord = sortedMarkers.map((marker) => ({
    latitude: parseFloat(marker.latitude),
    longitude: parseFloat(marker.longitude),
  }));

  const origin = { latitude: lat, longitude: long };
  const destination = {
    latitude: sortedMarkers[sortedMarkers.length - 1].latitude,
    longitude: sortedMarkers[sortedMarkers.length - 1].longitude,
  };
  const waypoints = coord.pop();
  console.log(markers);
  console.log(coord);
  return (
    <>
      <MapView
        style={styles.container}
        region={{
          latitude: 44.8066,
          longitude: 20.4689,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0201,
        }}
        mapType="standard"
        showsPointsOfInterest={false}
        showsBuildings={false}
        toolbarEnabled={false}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeColor="red"
          strokeWidth={4}
          apikey={GOOGLE_MAPS_APIKEY}
          mode="WALKING"
          waypoints={coord}
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            onPress={() => {
              setIsVisible(true);
              setActiveMarker({
                title: lang == "sr" ? marker.title : marker.title_en,
                desc: lang == "sr" ? marker.description : marker.description_en,
                image: marker.image,
              });
            }}
          >
            <Image
              source={{ uri: marker.icon }}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>

      <Modal
        style={styles.modal}
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false)
        }}
      >
        <View>
          <ScrollView>
            <View style={styles.modal}>
              <ImageBackground
                style={styles.image}
                source={{ uri: activeMarker.image }}
                imageStyle={{
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}
              >
                <IconButton
                  style={styles.arrow}
                  icon="arrow-left"
                  color={Colors.red}
                  size={35}
                  onPress={() => setIsVisible(false)}
                />
              </ImageBackground>
              <Text style={styles.title}>{activeMarker.title}</Text>

              <Text style={styles.desc}>{activeMarker.desc}</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 98,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  modal: {
    marginTop: 450,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
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
    paddingLeft: 20,
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

export default Direction;
