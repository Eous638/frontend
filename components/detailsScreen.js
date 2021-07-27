import { observer } from "mobx-react-lite";
import React,{ useContext} from "react";
import { View, Text, Image, StyleSheet  } from "react-native";
import {descriptionStoreContext} from '../states/descriptionScreenState'


const detailsScreen = observer(()=> {
  const detailStore = useContext(descriptionStoreContext)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: detailStore.image }} />
      <Text style={styles.title}>{detailStore.title}</Text>
      <Text style={styles.desc}>{detailStore.desc}</Text>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  image: {
    paddingTop: 25,
    width: "100%",
    height: 200
  }
})
export default detailsScreen;