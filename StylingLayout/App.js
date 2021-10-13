import React from 'react';
import {View,Text} from 'react-native';

const viewStyles ={

}

const HelloWorldComponent =() =>{
  
  return (
    <View style={{
      backgroundColor:'pink',
      flex:0.5,
      flexDirection:'row',
      justifyContent:'flex-end', //flexDirection ile aynı hizada
      alignItems:'center', // flexDirection'a dik hizada
    }}> 
      <Text>Merhabalar</Text>
    </View>
  );
}

//Tekil export
export const age=25;
export const func=()=>{

};

//default export
//Sadece bir tane default export olur
export default HelloWorldComponent; 

