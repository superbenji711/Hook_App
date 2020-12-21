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

class SettingsScr extends Component {


    render() {
        return (
            <View style={styles.container}>
               
                <Text style={styles.title1}>Profile screen</Text>
                <View style={styles.container}>
               
               <Text style={styles.title1}>Test</Text>

           </View>
            </View>
        );
    }
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