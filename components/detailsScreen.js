import { observer } from "mobx-react-lite";
import React,{ useContext} from "react";
import { View, Text,  } from "react-native";
import {descriptionStoreContext} from '../states/descriptionScreenState'

const detailsScreen = observer(()=> {
  const detailStore = useContext(descriptionStoreContext)
  return (
    <View>
      <Text>{detailStore.title}</Text>
    
    </View>
  );
})

export default detailsScreen;