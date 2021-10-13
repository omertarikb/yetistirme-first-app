import React from 'react';
import {View,StyleSheet} from 'react-native';



const App=()=>{
    const whiteBoxStyles=[
        styles.square,
        {
            backgroundColor:'white',
        }
    ];

    return (
        <View style={styles.container}>
               <View style={styles.square}></View>
               <View style={[
                   styles.square,{
                       backgroundColor:'yellow',
                   }
               ]}/>
               <View style={whiteBoxStyles}></View>
               <View style={styles.square}/>
        </View>
    )
}

const styles =StyleSheet.create(
    {
        container:{
            backgroundColor:'pink',
            // width:100,
            // height:200,
            flex:1,
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            paddingHorizontal:20,
            
        },
        square:{
            backgroundColor:'lightblue',
            width:20,
            height:20,
            borderColor:'grey',
            borderWidth:2,
            borderRadius:5,
            margin:5
        },
    }
);

export default App;