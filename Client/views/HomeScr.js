import React, { Component } from 'react';
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

const HomeScr = ({navigation}) => {
    
        return (
            <View style={styles.container}>
                <Text style={styles.title1}>Welcome to Hook</Text>
                <Text style={styles.title1}>Test</Text>
                <Button title="Here" onPress={()=> navigation.navigate("Settings")}><Text>"Here"</Text></Button>
                <Text style={styles.title1}>Hello World</Text>
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
    mainContainer: {
        margin: 20,
        // marginTop: STATUS_BAR_HEIGHT,
        flex: 1,
        display: 'flex',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        letterSpacing: 1,
        marginVertical: 30,
    },
    field: {
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        // minWidth: MAX_FIELD_WIDTH,
        borderRadius: 6,
        borderColor: '#F4F4F4',
        margin: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

});


export default HomeScr;