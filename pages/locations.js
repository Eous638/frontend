import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native'
import ListItem from '../components/listItem'

const DATA = [
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'Hram svetog save',
    desc : 'Veoma velika crkva'
    },
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },
    {id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },{id: 'r87gdwqidb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg/275px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3_%D0%A1%D0%B0%D0%B2%D0%B5_%D0%A1%D0%B5%D1%80%D0%B1%D1%81%D0%BA%D0%BE%D0%B3_%D1%83_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83.jpg',
    title: 'fuck',
    desc : 'shit'
    },
]
const tours = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Locations</Text>
            </View>
            <TextInput/>
            <View style={styles.listContainer}>
                <FlatList
                data={DATA}
                renderItem={ListItem}
                keyExtractor={item=>item.id}/>
                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#f3f3f3',
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20
    },
    titleContainer:{
        flex: 0.11,
        alignItems: 'flex-start',
        
    },
    title:{
        fontSize: 32,
        borderBottomWidth: 2,
        width: 150
        
    },
    listContainer:{
        flex: 1,
        color: 'black'
    },
    textInput:{
        color: 'gray',
        height: 20
    }
})

export default tours;