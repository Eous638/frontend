import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import beoturaEkipa from '../assets/beoturaEkipa.png'

const about = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.headerText}>About Us</Text>
            <Image source={beoturaEkipa} style={styles.image} />
            <Text style={styles.midText}>Nasa prica:</Text>
            <Text style={styles.discText}>Mi smo beogradski srednjoškolci i otkrivamo zanimljivu stranu beogradske istorije. Ustvari, istražujemo i fotografišemo skrivene dragulje Beograda u kojima sada možete i vi da uživate!  Izaberite svoju turu, i započnite svoju beogradsku avanturu sa nama! Ako želite da saznate više, posetite našu veb stranicu https://beotura.edukacija21.com/</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        paddingTop: 50,
    },
    headerText:{
        fontSize: 20,
        paddingBottom: 40,
    },
    image:{
        width:'90%',
        height:'30%',
        borderRadius: 15,

    },
    midText:{
        alignSelf:'flex-start',
        paddingTop:40,
        marginLeft: 10,
        fontSize: 20,
    },
    discText:{
        padding:10,
        fontSize:17,
        color:'#696969'
    },

})

export default about;