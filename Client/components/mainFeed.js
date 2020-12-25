import React, { Component, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { render } from 'react-dom';
import LinearGradient from 'react-native-linear-gradient';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    SafeAreaView
} from 'react-native';


class MainFeed extends Component {



    render() {
        const { navigation } = this.props;
        return (
            <View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // backgroundColor: 'grey',
        padding: 50,
        paddingTop: 70,
        flex: 1,
        // margin: 20,
    },
});


export default MainFeed;