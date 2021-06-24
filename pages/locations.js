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

const DATA = [];
const tours = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Locations</Text>
      </View>
      <TextInput
        style={{
          height: 30,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 15,
          marginLeft: 169,
          width: Dimensions.get("window").width * 0.44,
          backgroundColor: "#e3e3e3",
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f3f3f3",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    flex: 0.027,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    borderBottomWidth: 2,
    width: 150,
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
