import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { descriptionStoreContext } from "../states/descriptionScreenState";
import { languageStoreContext } from "../states/languageState";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions,
  Pressable, BackHandler,
} from "react-native";

import ListItem from "../components/listItem";



const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Places = observer(({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState();
  const [masterDataSource, setMasterDataSource] = useState();
  const [isLoading, setIsLoading] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [lang, setLang] = useState("");
  const langStore = useContext(languageStoreContext);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigation.canGoBack()){
        navigation.goBack();
        return true;
      }
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLang(langStore.language);
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://api.beotura.rs/api/places");
      setMasterDataSource(result.data);
      setFilteredDataSource(result.data);

    };

    fetchData();

  }, []);
  // https://blog.jscrambler.com/add-a-search-bar-using-hooks-and-flatlist-in-react-native/ Code za search bar sa activity indicatorom i cool je pogledaj
  const searchFilterFunction = (text) => {
    if (lang == "sr") {
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
  } else if(lang == 'en'){
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title_en
          ? item.title_en.toUpperCase()
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
  };}
  const detailStore = useContext(descriptionStoreContext);
  const l10n = {
    'title': {en: 'Choose location', sr: 'Izaberi lokaciju'},
    'search': {en: 'Search', sr: 'Pretraga'},

}
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{l10n['title'][lang]}</Text>
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
        placeholder={l10n['search'][lang]}
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
                  detailStore.title = (lang == "sr") ? item.title : item.title_en;
                  detailStore.desc = (lang == "sr") ? item.description : item.description_en;
                  detailStore.image = item.image;
                  detailStore.markers = [{
                    "title": item.title,
                    "title_en": item.title_en,
                    "description": item.description,
                    "description_en": item.description_en,
                    "latitude": item.latitude,
                    "longitude": item.longitude,
                    "ordering": item.ordering,
                    "image": item.image,
                    "icon": item.icon,
                    "id_field": 1
                }]

                }}
              >


                <ListItem title={(lang == "sr") ? item.title : item.title_en} image={item.image} />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
});



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

export default Places;
