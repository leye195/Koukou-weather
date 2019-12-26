import React from 'react';
import {Alert } from 'react-native';
import Loading from './Loading'; 
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';
const API_KEY = "5190672c2133015e104260d0bbaf055d";
export default class App extends React.Component{
  state={
    isLoading:true
  }
  getWeather=async(lat,lon)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const {data:{name,sys:{country},weather,main:{temp}}}=await axios.get(url);
    
    //console.log(name,weather[0].main,temp);
    this.setState({isLoading:false,name:name,conditions:weather[0].main,temp:temp,country:country});
  }
  getLocation=async()=>{
    try{
      const response=await Location.requestPermissionsAsync();
      console.log(response);
      const {coords:{latitude,longitude}}=await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      //Send to API and get Weather
      this.getWeather(latitude,longitude);
      
    }catch(e){
      Alert.alert("Can't find you. Sorry~~","Sad...");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const{isLoading,temp,conditions,name,country}=this.state;
    console.log(temp,".");
    return (
      isLoading?<Loading/>:<Weather temp={Math.floor(temp)} conditions={conditions} name={name} country={country} />
    );
  }
}

