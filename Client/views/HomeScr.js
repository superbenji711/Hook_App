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

import { connect } from 'getstream';

import MainFeed from '../components/MainFeed';

const HomeScr = ({navigation}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const client = connect('28247c38kzxk', null, 'qa4k7yqz5v2zba594k4auvr62ezxm4jxkkjnuu9wek7nswhj5vm965jrbu7ufgwn');

        return isLoggedIn === true ?  (
            <View style={styles.container}>
                <Text style={styles.title1}>Welcome to Hook</Text>

                <Button title="Here" onPress={()=> navigation.navigate("Profile")}><Text>"Here"</Text></Button>
                <Text style={styles.title1}>Hello World</Text>
            </View>
        )
        :
        (
            <View style={styles.container}>
                <Text style={styles.title1}>You are not logged in</Text>
                <Button title='change' onPress={()=>(setIsLoggedIn(!isLoggedIn))}></Button>
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
        // borderWidth: ,
        borderBottomWidth: 20,
        borderColor: 'black',
        
    },

});


export default HomeScr;