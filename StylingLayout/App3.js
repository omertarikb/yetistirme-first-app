import React from 'react';
import {View,StyleSheet,Dimensions,Text} from 'react-native';

const dimensions=Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;
//Margin - Padding Farkı
//Responsive olsun diye ekran width i kullanma
const App=()=>{

    return (
     <View style={styles.container}> 
         <View style={styles.header}>
             <Text>ANASAYFA</Text>
         </View>
         <View  style={styles.compaignsContainer}>
             <Text>Kampanya</Text>
             <Text>Kampanya</Text>
             <Text>Kampanya</Text>
         </View>
         <View style={styles.products}/>
         <View style={styles.footer}/>
     </View>
    )
}

const styles =StyleSheet.create(
    {
        container:{
        backgroundColor:'red',
        borderColor:'black',
        borderWidth:2,
        flex:1,
        paddingHorizontal:20,
        },
        header:{
            backgroundColor:'yellow',
            height:width*0.3,
            alignItems:'center',
            marginBottom:20,
        },
        compaignsContainer:{
            backgroundColor:'orange',
            height:width*0.5,
            borderColor:'rgba(0,0,0,0.7)',
            borderWidth:1,
            borderRadius:10,
        },
        products:{
            backgroundColor:'green',
            height:width*0.5,
            marginHorizontal:20,
            marginTop:20,
        },
        footer:{
            backgroundColor:'pink',
            height:width*0.3,
            marginBottom:20,
        },
    }
);

export default App;