import React from 'react';
import { AppRegistry, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import DatePicker from 'react-native-datepicker'
import { Icon } from 'react-native-elements';
import Table from './Table'

const studentData = [{
    name: 'Ani',
    attendDate: new Date("2018-12-03T07:00:00.000Z"),
    classCategory: 'Biology',
    sessions: 2,
    isAttend: true
},{
    name: 'Ani',
    attendDate: new Date("2018-12-10T07:00:00.000Z"),
    classCategory: 'Math',
    sessions: 4,
    isAttend: false
},{
    name: 'Budi',
    attendDate: new Date("2018-12-06T07:00:00.000Z"),
    classCategory: 'English',
    sessions: 4,
    isAttend: false
},{
    name: 'Budi',
    attendDate: new Date("2018-12-08T07:00:00.000Z"),
    classCategory: 'Biology',
    sessions: 4,
    isAttend: true
}]

let attendances = [];

export default class Attendance extends React.Component {
    constructor(props){
        super(props)
        this.state = {startDate: '',endDate: '', studentArr: studentData, show:[], search: ''}
    }

    handleSearch(){
        let temp = []
        const searchName = this.state.search;
        this.state.studentArr.map((student) => {
            if (student.name == searchName)
                attendances.push(student)
        })
        attendances.map((data)=> {
            if (data.attendDate >= this.state.startDate && this.state.endDate >= data.attendDate)
                temp.push(data)
        })
        this.setState({
            show: this.state.show.concat(temp)
        })
        console.log("this.state.show")
        console.log(this.state.show)
    }

    render(){
        return(
            <View style={styles.formContainer}>
              <View style={styles.row}>
                    <Text style={styles.labelText}>Date</Text>
                    <DatePicker
                        style={{width: 150}}
                        date={this.state.startDate}
                        format="DD MMM YYYY"
                        mode="date"
                        placeholder="Start date"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconComponent={
                            <Icon name='calendar' type='font-awesome' /> 
                        }
                        customStyles={{
                            dateInput: {
                                marginLeft: 0,
                                borderColor: 'transparent'
                            }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({startDate: new Date(date)})}}
                    />
                    <Text style={[styles.labelText,styles.leftPad]}>to</Text>
                    <DatePicker
                        style={{width: 150}}
                        date={this.state.endDate}
                        mode="date"
                        placeholder="End date"
                        format="DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconComponent={
                            <Icon name='calendar' type='font-awesome' /> 
                        }
                        customStyles={{
                            dateInput: {
                                marginLeft: 0,
                                borderColor: 'transparent'
                            }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({endDate: new Date(date)})}}
                    />
              </View> 
              <View style={styles.row}>
                    <Text style={[styles.labelText,styles.label]}>Student ID</Text>
                    <TextInput placeholder="Student Id" style={styles.textBox} />
              </View>
              <View style={styles.row}>
                    <Text style={[styles.labelText,styles.label]}>Student Name</Text>
                    <TextInput placeholder="Student Name" style={styles.textBox} onChangeText={(text)=> this.setState({search:text})}/>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={this.handleSearch.bind(this)}>
                    <View style={[styles.button,styles.blue]}>
                        <Text style={[styles.textWhite,styles.labelText]}>Search</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <Table tableData={this.state.show} />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    leftPad: {
        marginLeft: 20
    },
    label: {
        width: 120,
    },
    textBox: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginLeft: 20
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
    textBlue: {
        color: '#2a76cc'
    }
});

AppRegistry.registerComponent('steamlab', () => Attendance)