import React from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

import { Icon } from 'react-native-elements';

export default class ListItem extends React.Component {    
    render(){
        return(
            <View style={styles.listItem}>
                <View style={[styles.round,styles.lightblue]}>
                    <Icon name='user' type='font-awesome' color='white' size={30} />
                </View>
                <View style={styles.listDetail}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text>Grade : {this.props.grade}</Text>
                </View>
            </View>     
        );
    }
}

const styles = StyleSheet.create({
    round: {
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        marginRight: 10
    },
    lightblue: {
        backgroundColor: 'lightblue'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    listDetail: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

AppRegistry.registerComponent('steamlab', () => ListItem)