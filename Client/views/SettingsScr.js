import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
    StatusBar, 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Image 
} from 'react-native';

const SettingsScr = () =>  {


    
        return (
            <View style={styles.container}>
               
                <Text style={styles.title1}>Setting screen</Text>
                {/* <Text style={{alignContent: 'center', alignSelf:'center'}}>Hello World</Text> */}

            </View>
        );
    
}


const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 20,
        flex:1,
    },
    title1:{
        textAlign:'center',
        fontSize: 30,
        borderWidth: 10,
        // ,
        borderColor: 'black',
        borderRadius: 15,
    },
    mainContainer: {
        margin: 20,
        // marginTop: STATUS_BAR_HEIGHT,
        flex: 1,
        display: 'flex',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

});


export default SettingsScr;