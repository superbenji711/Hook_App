import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { 
    StatusBar, 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Image,
    Button
} from 'react-native';


const StatsScr = ({navigation}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



        // return isLoggedIn === true ?  (
        return (
            <View style={styles.container}>
                <Text style={styles.title1}>This is your stats</Text>

            </View>
        )
        // :(
        //     <View style={styles.container}>
        //         <Text style={styles.title1}>Please make an account</Text>
               
        //     </View>

        // );
    
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
        // borderWidth: ,
        borderBottomWidth: 20,
        borderColor: 'black',
        
    },

});


export default StatsScr;