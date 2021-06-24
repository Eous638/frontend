import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import ListItem from "../components/listItem";

const DATA = [
  {
    id: "r87gdwqidb",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg",
    title: "Temple of Saint Sava",
    desc: "Serbian Orthodox church which...",
  },
  {
    id: "r87gdwqidb",
    image: "https://belgrade-beat.rs/photos/venues/27/c-1527600542.jpg",
    title: "Nikole Pašića Square",
    desc: "One of the main central town...",
  },
  {
    id: "r87gdwqidb",
    title: "Nebojsa Tower",
    desc: "Nebojsa Tower is an... ",
  },
];
const tours = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pick a tour to start with:</Text>
      </View>
      <TextInput
        style={{
          height: 30,
          borderColor: "#6c757d",
          borderWidth: 1,
          marginTop: 25,
          marginBottom: 20,
          width: Dimensions.get("window").width * 0.6,
          borderRadius: 25,
          paddingLeft: 20,
        }}
        onChangeText={(text) => onChangeText(text)}
        placeholder={"search"}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={ListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    paddingTop: 30,
  },
  titleContainer: {
    alignSelf: "center",
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    color: "black",
  },
  listContainer: {
    flex: 1,
    color: "black",
  },
  textInput: {
    color: "gray",
    height: 20,
  },
});

export default tours;
