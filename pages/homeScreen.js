import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { descriptionStoreContext } from "../states/descriptionScreenState";
const home = observer(({ navigation }) => {
  
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
    }
    })}
  );
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://api.beotura.rs/api/places");
      setMarkers(result.data);
     
    };

    fetchData();
    
  }, []);

  const detailStore = useContext(descriptionStoreContext);
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
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude)}}
        
          onPress={() => {
            navigation.navigate("DetailsScreen");
            detailStore.title = marker.title;
            detailStore.desc = marker.description;
            detailStore.image = marker.image;
          }}
          >
          <Image source={{uri: marker.icon}}
          style={{ width: 26, height: 28 }}
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
