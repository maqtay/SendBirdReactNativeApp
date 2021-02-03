import React from 'react';
import { SafeAreaView, View, Text, ToastAndroid } from 'react-native';

import GLOBALS from '../globals';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.welcomeText = 'Welcome, ' + GLOBALS.user.nickname;
    }

    componentDidMount() {
        ToastAndroid.show(this.welcomeText, ToastAndroid.SHORT);
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    
                </View>
            </SafeAreaView>
        )
    }
}
