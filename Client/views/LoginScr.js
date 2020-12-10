import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput  } from 'react-native';

class LoginScr extends Component {
    constructor(){
        super(props);
        this.state={
            password: ""
        }
        this.setPassword = this.setPassword(bind);
    }
    setPassword = (response) =>{
        
        this.setState({
            password: response.password
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Now</Text>

                {/* <TextInput style={styles.password} placeholder={'Username'} onChange={(password) => this.setState({password})}/>
                <TextInput style={styles.password} placeholder={'Password'}/> */}
                <Text>Hello World</Text>
                {console.log(this.password)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    password: {
        height: 40,
        backgroundColor: 'azure',
        fontSize: 20
    }
});

export default LoginScr;