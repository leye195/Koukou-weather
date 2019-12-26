import React,{Component} from 'react';
import {StyleSheet,View,Text,StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import PropTypes from 'prop-types';
const WeatherOptions={
    Clouds:{icon:"weather-cloudy",colors:['#bdc3c7','#2c3e50']},
    Clear:{icon:"weather-sunny",colors:['#c21500','#ffc500']},
    Mist:{icon:"weather-cloudy",colors:['#c9d6ff','#e2e2e2']},
    Haze:{icon:"weather-hail",colors:['#616161','#9bc5c3']},
    Dust:{icon:"weather-windy-variant",colors:['#b79891','#94716b']},
    Rain:{icon:"weather-rainy",colors:['#1a2980','#26d0ce']},
    Fog:{icon:"weather-fog",colors:['#bdc3c7','#2c3e50']},
    Sand:{icon:"weather-windy",colors:['#3e5151','#decba4']},
    Ash:{icon:"weather-cloudy",colors:['#606c88','#3f4c6b']},
    Smoke:{icon:"weather-windy-variant",colors:['#bdc3c7','#2c3e50']},
    Snow:{icon:"weather-snowy",colors:['#e6dada','#274046']},
    Drizzle:{icon:"weather-pouring",colors:['#6190e8','#a7bfe8']},
    Squall:{icon:"weather-windy",colors:['#4ca1af','#c4e0e5']},
    Tornado:{icon:"weather-hurricane",colors:['#667db6','#0082c8']},
    Thunderstorm:{icon:"weather-lightning",colors:['#ffd89b','#19547b']}
}
export default function Weather({temp,conditions,name,country}){
    return(
        <LinearGradient colors={WeatherOptions[conditions]['colors']}
        style={styles.container} >
            <StatusBar barStyle="light-content"/>
            <View style={{...styles.halfcontainer,...styles.textContainer}}>
                <MaterialCommunityIcons name={WeatherOptions[conditions]['icon']} size={100} color={'white'}/>   
                <Text style={styles.temp}>{temp+' °'}</Text> 
            </View>
            <View style={styles.halfcontainer}>
    <Text style={styles.title}>{conditions}</Text>
<Text style={styles.sub}>{name}, {country}</Text>
            </View>
        </LinearGradient>
    );
}
//Thunderstorm,Drizzle,Rain,Snow,Clouds,Clear,Mist
//Smoke,Haze,Dust,Fog,Sand,Ash,Squall,Tornado
Weather.propTypes={
    temp:PropTypes.number.isRequired,
    conditions:PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow",
    "Clouds","Clear","Mist","Smoke","Haze","Dust",
    "Fog","Sand","Ash","Squall","Tornado"]).isRequired
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    halfcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    temp:{
        fontSize:34,
        color:'white'
    },
    title:{
        color:'white',
        fontSize:45,
        fontWeight:"300",
        marginBottom:15
    },
    sub:{
        fontWeight:"600",
        color:'white',
        fontSize:20
    },
    textContainer:{
        paddingHorizontal:30
    }
})
