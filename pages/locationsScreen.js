import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { descriptionStoreContext } from "../states/descriptionScreenState";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ListItem from "../components/listItem";
import DetailsScreen from "../components/detailsScreen";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Tours = observer(({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState();
  const [masterDataSource, setMasterDataSource] = useState();
  const [isLoading, setIsLoading] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://api.beotura.rs/api/places");
      setMasterDataSource(result.data);
      setFilteredDataSource(result.data);
      console.log(result.data[0].Place)
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
  const detailStore = useContext(descriptionStoreContext);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>View locations:</Text>
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
              <Pressable
                onPress={() => {
                  navigation.navigate("DetailsScreen");
                  detailStore.title = item.title;
                  detailStore.desc = item.description;
                  detailStore.image = item.image;
                }}
              >
                
                <ListItem title={item.title} image={item.image} />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
});

const Stack = createNativeStackNavigator();
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
  refresh: {
    marginTop: 60,
    flex: 1,
  },
});
