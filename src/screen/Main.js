import React from 'react';
import { AppRegistry, StyleSheet, ScrollView } from 'react-native';

import Header from './Header'
import Form from './Form'

export default class Main extends React.Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Header pageTitle='Teacher List' />
                <Form />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    }
});

AppRegistry.registerComponent('steamlab', () => Main)