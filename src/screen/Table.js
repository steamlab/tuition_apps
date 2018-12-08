import React from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class Table extends React.Component {
    renderRow(datum, ind) {
        return (
            <View key={ind} style={[styles.row,styles.bordered]}>
                <View style={[styles.cell,styles.bordered]}>
                    <Text>{datum.classCategory}</Text>
                </View>
                <View style={[styles.cell,styles.bordered]}><Text>{datum.sessions}</Text></View>
                <View style={[styles.cell,styles.bordered]}><Text>{datum.isAttend?'Attend':'Absent'}</Text></View>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.table,styles.bordered]}>
                <View style={[styles.row,styles.bordered,styles.header]}>
                    <View style={[styles.cell,styles.bordered]}>
                        <Text style={styles.headerText}>Class Category</Text>
                    </View>
                    <View style={[styles.cell,styles.bordered]}><Text style={styles.headerText}>Sessions</Text></View>
                    <View style={[styles.cell,styles.bordered]}><Text style={styles.headerText}>Attendance</Text></View>
                </View>
            {
                this.props.tableData.map((datum, ind) => { // This will render a row for each data element.
                    return this.renderRow(datum, ind);
                })
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    table: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    bordered: {
        borderWidth: 0.5,
        borderColor: '#0a4096'
    },
    header: {
        backgroundColor: '#0a4096',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold'
    },
    cell: { 
        flex: 1, 
        alignSelf: 'stretch',
        padding: 8,
        alignItems: 'center'
    },
    row: { 
        flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row'
    }
});

AppRegistry.registerComponent('steamlab', () => Table)