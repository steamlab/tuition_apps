import React from 'react';
import { AppRegistry, StyleSheet, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import Header from './Header'
import AnotherListItem from './AnotherListItem'

const student= [{
    id: '1',
    name: 'Devi',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 2
},{
    id: '2',
    name: 'Elwin',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 4
},{
    id: '3',
    name: 'Jimmy',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 2
},{
    id: '4',
    name: 'Raymond',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Math',
    sessions: 4
},{
    id: '5',
    name: 'Linda',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Math',
    sessions: 4
},{
    id: '6',
    name: 'Mark',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 2
}];

export default class Third extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            studentArr : student,
            dateSearch : '',
            classSearch: '',
            sessionSearch: ''
        }
    }
    
    _renderItem = ({item}) => (
        <AnotherListItem
            name={item.name}
            class={item.classCategory}
            session={item.sessions}
        />
    );

    searchAttendance = () => {
        let filter = {
            attendDate: this.state.dateSearch,
            classCategory : this.state.classSearch,
            sessions : this.state.sessionSearch
        }
        let arr = student.filter((item) => {
            for (var key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                  return false;
                }
                return true;
        })
        console.log("arr")
        console.log(arr)
        this.setState({studentArr : arr})
    }
    
    render(){
        const dateList = [{
            value: new Date("2018-12-03T07:00:00.000Z").toDateString()
        },{
            value: new Date("2018-12-05T07:00:00.000Z").toDateString()
        }]

        const classList = [{
            value: 'Biology'
        },{
            value: 'Math'
        }]

        const sessionList = [{
            value: 2
        },{
            value: 4
        }]

        return(
            <ScrollView style={styles.container}>
                <Header pageTitle='Attendance List' />
                <View style={styles.row}>
                    <View style={styles.text}>
                        <Text style={styles.filterText}>Date : </Text>
                    </View>
                    <Dropdown
                            label="Date"
                            data={dateList}
                            containerStyle={styles.dropdown}
                            dropdownOffset={{top:0,left:0}}
                            onChangeText={text =>this.setState({dateSearch: text})}
                            rippleInsets={{top:0,bottom:0}}
                            dropdownPosition={0}
                        />
                </View>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <Text style={styles.filterText}>Class Category : </Text>
                    </View>
                    <Dropdown
                            label="Class Category"
                            data={classList}
                            containerStyle={styles.dropdown}
                            dropdownOffset={{top:0,left:0}}
                            onChangeText={text =>this.setState({classSearch: text})}
                            rippleInsets={{top:0,bottom:0}}
                            dropdownPosition={0}
                        />
                </View>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <Text style={styles.filterText}>Sessions : </Text>
                    </View>
                    <Dropdown
                            label="Sessions"
                            data={sessionList}
                            containerStyle={styles.dropdown}
                            dropdownOffset={{top:0,left:0}}
                            onChangeText={text =>this.setState({sessionSearch: text})}
                            rippleInsets={{top:0,bottom:0}}
                            dropdownPosition={0}
                        />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={this.searchAttendance}>
                        <View style={[styles.button,styles.blue]}>
                            <Text style={[styles.textWhite,styles.labelText]}>Search</Text>
                        </View>
                    </TouchableOpacity>
              </View>
              <FlatList data={this.state.studentArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        alignItems: 'center',
        marginTop: 3
    }, 
    filterText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        flex: 0.5,
        justifyContent: 'center',
    },
    dropdown: {
        flex: 1,
        marginTop: 0,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#2a76cc'
    },
    blue: {
        backgroundColor: '#2a76cc',
        borderColor: '#2a76cc'
    },
    textWhite: {
        color: 'white'
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    list: {
        paddingHorizontal: 15
    }
});

AppRegistry.registerComponent('steamlab', () => Third)