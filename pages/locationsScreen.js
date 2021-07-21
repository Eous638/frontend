import React, { useState, useEffect,useContext } from "react";
import { observer } from "mobx-react-lite";
import {descriptionStoreContext} from '../states/descriptionScreenState'
import axios from 'axios';
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


const Tours = observer(({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState();
  const [masterDataSource, setMasterDataSource] = useState();
  
 
 useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'http://192.168.0.22:8000/api/places',
    );
    console.log(result.data)
    setMasterDataSource(result.data);
    setFilteredDataSource(result.data);
  };

  fetchData();
}, []);
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
  const detailStore = useContext(descriptionStoreContext)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose the location you would like to see:</Text>
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
          keyExtractor={(item) => item.id_field.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailsScreen")
                  detailStore.title = item.title
                  detailStore.desc = item.description
                  detailStore.image = item.image}
              }
              >
                <ListItem title={item.title} desc={''} image={item.image} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
});

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
