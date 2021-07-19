import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,

} from "react-native";

const ListItem = ( props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.image }} /> 
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={"tail"}
          style={{
            width: 200,
            zIndex: 3,
            position: "absolute",
            marginLeft: 20,
            marginTop: 140,
            color: "white",
          }}
        >
          {props.desc}
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    alignSelf: "center",
    zIndex: 1,
    position: "absolute",
    opacity: 0.6,
  },
  textContainer: {
    marginTop: 3,
  },
  title: {
    marginBottom: 4,
    fontSize: 30,
    color: "white",
    zIndex: 3,
    position: "absolute",
    marginLeft: 20,
    marginTop: 100,
  },
  container: {
    height: Dimensions.get("window").height * 0.24,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 15,
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 8,
    zIndex: 0,
    backgroundColor: "black",
  },
});

export default ListItem;
