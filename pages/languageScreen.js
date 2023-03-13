import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, BackHandler} from "react-native";
import {useState} from 'react';
import {observer} from "mobx-react-lite";
import {languageStoreContext} from "../states/languageState";
import {RadioButton} from 'react-native-paper';


const Language = observer(({navigation}) => {
    const [checked, setChecked] = useState('first');
    const langStore = useContext(languageStoreContext);

    function setEnglish() {
        langStore.language = "en";
    };

    function setSerbian() {
        langStore.language = "sr";
    };


    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (navigation.canGoBack()){
                navigation.goBack();
                return true;
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{(langStore.language == "sr") ? 'Izaberite jezik' : 'Choose the language'}</Text>
            <View style={styles.radioContainer}>
                <Text style={styles.radioText}>Srpski</Text>
                <RadioButton
                    value="English"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked('first'), setSerbian()
                    }}
                    uncheckedColor="blue"
                    color="red"
                />
            </View>
            <View style={styles.radioContainer}>
                <Text style={styles.radioText}>English</Text>
                <RadioButton
                    value="Srpski"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked('second'), setEnglish()
                    }}
                    uncheckedColor="blue"
                    color="red"
                />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    title: {
        fontSize: 30,
        paddingLeft: 15,
        paddingBottom: 50,
    },
    button: {
        width: "85%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#16b8f3",
        margin: 10,
    },
    active: {
        width: "85%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "red",
        margin: 10,
    },
    radioContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        marginBottom: 20,

    },
    radioText: {
        fontSize: 20,
        paddingLeft: 20,
    },

});

export default Language;
