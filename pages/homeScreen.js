import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const home = () => {
  const [lat, setLat] = useState(44.7866);
  const [long, setLong] = useState(20.4489);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          distanceInterval: 1,
          timeInterval: 1000,
        },
        (location) => {
          setLat(parseFloat(location.coords.latitude));
          setLong(parseFloat(location.coords.longitude));
        }
      );
    })();
  }, []);

  return (
    <MapView
      style={styles.container}
      region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00401,
      }}
    >
      <Marker coordinate={{ latitude: lat, longitude: long }}>
        <Image
          source={require("../assets/user_loc.png")}
          style={{ width: 26, height: 28 }}
          resizeMode="contain"
        />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 98,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
});

export default home;
