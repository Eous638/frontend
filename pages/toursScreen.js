import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListItem from "../components/listItem";
import DetailsScreen from "../components/detailsScreen";

export const data = [
  {
    id: "r87gdwqidba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg",
    title: "Temple of Saint Sava",
    desc: "Serbian Orthodox church whasdadasdadasssssssssssssssaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    id: "r87gdwqidbb",
    image: "https://belgrade-beat.rs/photos/venues/27/c-1527600542.jpg",
    title: "Nikole Pašića Square",
    desc: "One of the main central townsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    id: "r87gdwqidbc",
    title: "1ebasdoj1231231233sa Tower",
    desc: "Nebojsa Tower is ansaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ",
  },
];

const Tours = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data);
  // https://blog.jscrambler.com/add-a-search-bar-using-hooks-and-flatlist-in-react-native/ Code za search bar sa activity indicatorom i cool je pogledaj
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
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
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder={"Search"}
        value={search}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailsScreen")}
              >
                <ListItem title={item.title} desc={item.desc} image={item.image} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tours" component={Tours} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

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
