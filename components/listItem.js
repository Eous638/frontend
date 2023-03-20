import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const ListItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={"tail"}
          style={{
            zIndex: 3,
            position: "absolute",
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
    position: "absolute",
    opacity: 0.7,
  },
  title: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
    marginTop: 110,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  container: {
    height: Dimensions.get("window").height * 0.24,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "black",
  },
});

export default ListItem;
