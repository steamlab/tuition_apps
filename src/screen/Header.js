import React from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Header extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.left}>
                    <View>
                        <Icon name='md-arrow-round-back' type='ionicon' color='white' />
                    </View>
                </TouchableOpacity>
                <View style={styles.right}>
                    <Text style={styles.headerText}>{this.props.pageTitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#0a4096',
        flexDirection: 'row',
        padding: 12,
        paddingTop: 15
    },
    left: {
        flex: 0.5,
        alignContent: 'flex-start'
    },
    right: {
        flex: 9.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 18,
        color: 'white'
    }
});

AppRegistry.registerComponent('steamlab', () => Header)