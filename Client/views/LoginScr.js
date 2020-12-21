import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

class LoginScr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        }
    }
    
    loginIn = async () => {
        // event.preventDefault();
        const { userName, password } = this.state;

        { console.log(userName + " " + password) }
    };


    setPassword = (response) => {
        this.setState({
            password: response,
        })
    };
    setUserName = (response) => {
        this.setState({
            userName: response,
        })
    };

    render() {
        const {navigation} = this.props;

        const { userName, password } = this.state;
        return (
            <View style={styles.container}>
                <Image source={{
                    uri: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg'
                }}
                    style={{ height: 110, width: 110 }}
                />
                <Text style={styles.appTitle}>Hook App</Text>

                <View style={styles.rowDisplay}>
                    <TextInput
                        style={styles.field}
                        placeholder={'Username'}
                        onChangeText={this.setUserName}
                        value={userName}
                    />
                    <TextInput
                        style={styles.field}
                        placeholder={'Password'}
                        onChangeText={this.setPassword}
                        value={password}
                    />
                </View>
                <TouchableOpacity
                    title={'Login'}
                    onPress={() => this.loginIn(userName, password)}
                    style={styles.loginButton}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title={'Sign Up'}
                    onPress={null}
                    style={styles.loginButton}
                >
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        flex: 1,
        margin: 20,
    },
    rowDisplay: {
        flexDirection: 'row'

    },
    appTitle: {
        textAlign: 'center',
        fontSize: 30,
        borderWidth: 5,
        backgroundColor: '#ff9a5c',
        borderColor: 'black',
        borderRadius: 12,
    },
    title: {
        fontSize: 34,
        letterSpacing: 1,
        marginVertical: 30,
    },
    field: {
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#F4F4F4',
        margin: 7,
        fontSize: 15,
        paddingTop: 10,
        paddingHorizontal: 32,
        paddingVertical: 5,
    },
    loginButton: {
        padding: 15,
        // minWidth: MAX_FIELD_WIDTH,
        backgroundColor: '#ACCBAC',
        borderWidth: 1,
        borderColor: '#ACCBAC',
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        elevation: 3,
    },
    signupButton: {
        padding: 10,
        // minWidth: MAX_FIELD_WIDTH,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ACCBAC',
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    signupButtonTxt: {
        fontSize: 15,
        alignSelf: 'center',
        color: '#ACCBAC',
    },
    loginButtonText: {
        // flex: 1,
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
});


export default LoginScr;