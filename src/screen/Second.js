import React from 'react';
import { AppRegistry, StyleSheet, ScrollView } from 'react-native';

import Header from './Header'
import Attendance from './Attendance';

export default class Second extends React.Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Header pageTitle='Attendance List' />
                <Attendance />
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

AppRegistry.registerComponent('steamlab', () => Second)