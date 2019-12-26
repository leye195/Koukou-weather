import React,{Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default class Loading extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <Text style={styles.text}>Getting the Weather😑</Text>
            </View>
        ) 
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:50,
        backgroundColor:'#FDF9AA'
    },
    text:{
        color:'#2c2c2c',
        fontSize:25
    }
})
