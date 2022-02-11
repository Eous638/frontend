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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);

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
        <Text style={styles.title}>View:</Text>
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
                  detailStore.markers = [{
                    "title": item.title,
                    "title_en": "Nebojsa Tower",
                    "description": item.description,
                    "description_en": "Nebojsa Tower is located in the lower town area of the Belgrade fortress, at the meeting point of the coastal and northeast walls, by the entry into the former Danube dock. The original tower was part of the upper town and represented the largest and most significant keep in medieval Belgrade.\r\n\r\nWHY THE NAME NEBOJSA TOWER?\r\n\r\nThe name Nebojsa means fearless in Serbian.  Most likely the tower's name originates from the verb not to fear, which was deemed appropriate for the tower in the lower town where the Ottomans locked in and subjected prisoners to various torture methods. According to legend, the citizens of Belgrade would encourage each other by saying ''don't be afraid'' during Ottoman invasions, and the same was said  by Ottoman executioners, who would encourage prisoners that way before killing them.\r\n\r\nAs it is mentioned, the Nebojsa Tower was part of the Belgrade fortress and represented the most significant Keep of medieval Belgrade, so its name was carried over to the current tower on the coast.\r\n\r\nIt is believed that the present-day tower was constructed by Hungarians in 1456, after a failed Ottoman invasion. Shortly after its construction, it carried the name Timisoara or White Tower. With its distinguished position and new weaponry in the urban defense system, this tower protected the northeastern side, as well as the main city gates.\r\n\r\nThe Danube dock was also protected by the tower, as well as the area leading to the eastern city gates of the lower town and the renowned entrance into the docks. In that regard, it represented the ''front wall of christianity'', having kept Ottoman invasions directed at Europe at bay for decades. During the Ottoman siege of Belgrade in 1521, the strategic significance of the tower proved to be crucial. On that occasion, the Ottomans set the fortress on fire, but later rebuilt it by the order of Suleiman The Magnificent.\r\n\r\nWhen the Ottoman army conquered Belgrade, the tower became a dungeon. Starting from the 18th century, the tower is associated with captivity and death. Rebels against the Ottoman army where subjected to torture and murder. The tower was also the final residence of escaped Jannissaries, and it is believed that there are still iron hooks placed on interior walls which served to hang rebels. It is also known that in 1798, famous Greek revolutionary and anti-ottoman fighter Rigas Feraios died in the tower. Some years later, the archbishop of Belgrade Methodius was also executed there. The tower was reconstructed many times, and lost its defensive importance.\r\n\r\nThe tower was constructed as a multi-story octagonal building. The thickness of the walls is uniform and amounts to 3 meters which made it practically impenetrable at the time. It was made of stone, and the floor was made with wooden boards which were covered with crushed rocks connected to each other with plaster. The tower had 4 floors and the height of each floor was about 4-4.30 meters. The defensive platform was accessed from the current 4th floor. This tower is representative of the oldest type of early artillery high towers.\r\n\r\nIn 1946 the tower was declared a cultural heritage site. A little more than 50 years later, its interior was transformed into a showroom, which deservedly made Nebojsa Tower a museum treasury of the particularly rich history of Belgrade. With the initiative of Athens, an agreement was reached with Belgrade regarding the renovation and repurposing of the historical monument. The Greek government invested 1.3 million euros, as well as domestic expenses of 75 million RSD. The reconstruction took place from 2009-2010.\r\n\r\nA permanent museum setting was instated afterwards, as well as a virtual story of the Serbian and Greek nations in the last 2 centuries. In the entrance hall of the museum are maps of the Kalemegdan Fortress from the 18th century, and a large wooden cross bearing witness to the place of suffering. A portrait of Rigas Feraios refers to the tower's most famous prisoner. An exhibition on the topic of slavery is located on the ground floor, the period from 1460 up until the 19th century is presented on the first floor, the second floor is dedicated to Rigas Feraios, the third floor tells the tale of the First Serbian Uprising and the creation of the modern Serbian state. The final floor is dedicated to Milos Obrenovic. All of this is based on the most contemporary projectors, digital frames, a high tech audio system and 3D technology.",
                    "latitude": item.latitude,
                    "longitude": item.longitude,
                    "ordering": item.ordering,
                    "image": "http://api.beotura.rs/static/images/DSC_0191-min-2.JPG",
                    "icon": item.icon,
                    "tour": "http://api.beotura.rs/static/images/DSC_0191-min-2.JPG", 
                    "id_field": 1
                }]
                  
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