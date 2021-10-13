import React from 'react';
import {View,StyleSheet,Dimensions,Text} from 'react-native';

const dimensions=Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;
//fLEX,fLEX-sHRİNK, FLEXgROW
const App=()=>{

    return (
     <View style={styles.container}> 
         <View style={styles.header}>
             <Text>ANASAYFA</Text>
         </View>
         <View  style={styles.compaignsContainer}>
         </View>
         <View style={styles.products}/>
         <View style={styles.footer}/>
     </View>
    )
}

const styles =StyleSheet.create(
    {
        container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flex:1,
        },
        header:{
            backgroundColor:'yellow',
            //flex:10,
            height:width*0.2,
        
        },
        compaignsContainer:{
            backgroundColor:'orange',
            //flex:30,
            flexGrow:0.5,
        },
        products:{
            backgroundColor:'green',
            //flex:45,
            height:width*2,
            flexShrink:1,

            //flexGrow:1,
        },
        footer:{
            backgroundColor:'pink',
            //flex:15,
            height:width*0.2,
        },
    }
);

export default App;