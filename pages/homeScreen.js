import React, { useState, useEffect, useContext } from "react";
import {StyleSheet, Image, BackHandler} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { descriptionStoreContext } from "../states/descriptionScreenState";
import { languageStoreContext } from "../states/languageState";
const home = observer(({ navigation }) => {

  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);
  const langStore = useContext(languageStoreContext);
  const [lang, setLang] = useState("");
  const detailStore = useContext(descriptionStoreContext);

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
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      detailStore.startlang = parseFloat(location.coords.longitude)
      detailStore.startlat = parseFloat(location.coords.latitude)
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://api.beotura.rs/api/places");
      setMarkers(result.data);

    };

    fetchData();

  }, []);

  return (
    <MapView
      style={styles.container}
      region={{
        latitude: 44.8066,
        longitude: 20.4689,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0401,
      }}
      mapType="standard"
      showsPointsOfInterest={false}
      showsBuildings={false}
      toolbarEnabled={false}
      showsUserLocation={true}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id_field}
          coordinate={{latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude)}}

          onPress={() => {
            navigation.navigate("DetailsScreen");
            detailStore.title = (lang === "sr") ? marker.title : marker.title_en;
            detailStore.desc = (lang === "sr") ? marker.description : marker.description_en;
            detailStore.image = marker.image;
            detailStore.markers = [{
              "title": marker.title,
              "title_en": marker.title_en,
              "description": marker.description,
              "description_en": marker.description_en,
              "latitude": marker.latitude,
              "longitude": marker.longitude,
              "ordering": marker.ordering,
              "image": marker.image,
              "icon": marker.icon,
              "id_field": 1
          }]
          }}
          >
          <Image source={{uri: marker.icon}}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
          </Marker>))}

    </MapView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 98,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
});

export default home;
