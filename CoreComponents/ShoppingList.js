import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';



const ShoppingList = props => {
    return (
        
            <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput style={styles.textinput}
                    placeholder="Yazmaya başlayın..."/>
                </View>
                <TouchableOpacity style={styles.buttonEkle}>
                    <Text style={{color:'white'}}>EKLE</Text>
                </TouchableOpacity>
                <Text style={{color:'orange',margin:10}}>Alınacaklar</Text>


                <View style={styles.satir}>
                    {/* Kutucuk */}
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{flexGrow:1}}>Ekmek</Text>
                    {/* Buton */}
                    <TouchableOpacity style={styles.buttonSil}>
                        <Text style={{color:'white'}}>Sil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.satir}>
                    {/* Kutucuk */}
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{flexGrow:1}}>Elma</Text>
                    {/* Buton */}
                    <TouchableOpacity style={styles.buttonSil}>
                        <Text style={{color:'white'}}>Sil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.satir}>
                    {/* Kutucuk */}
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{flexGrow:1}}>Süt</Text>
                    {/* Buton */}
                    <TouchableOpacity style={styles.buttonSil}>
                        <Text style={{color:'white'}}>Sil</Text>
                    </TouchableOpacity>
                </View>
                
                </SafeAreaView>
            </View>
        
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor:'white'
    },
    container: {
        backgroundColor:'white',
    },
    headerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white'
    },
    headerText: {

        color:'orange',
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,

    },
    textinput: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
      },
    buttonEkle:{
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        borderRadius:10,
        margin:10,
    },
    buttonSil:{
        alignItems: "center",
        backgroundColor:"red",
        padding: 10,
        borderRadius:10,
        marginRight:0,
    },
    satir:{
        margin:10,
        flexDirection:'row',
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
    
});

export default ShoppingList;
