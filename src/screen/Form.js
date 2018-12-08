import React from 'react';
import { AppRegistry, StyleSheet, View, Text, FlatList } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import ListItem from './ListItem';

const teacher= [{
    id: '1',
    name: 'Anita',
    grade: 'Junior',
},{
    id: '2',
    name: 'Basthian',
    grade: 'Senior',
},{
    id: '3',
    name: 'Felix',
    grade: 'Junior',
},{
    id: '4',
    name: 'Yuni',
    grade: 'Senior',
},{
    id: '5',
    name: 'Shinta',
    grade: 'Advanced'
}];

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            teacherArr : teacher
        }
    }
    
    _renderItem = ({item}) => (
        <ListItem
            name={item.name}
            grade={item.grade}
        />
    );

    handleChangedText = (text) => {

        if (text != 'All Grades'){
            let arr = teacher.filter((item) => item.grade == text )

            this.setState({teacherArr : arr})
        } else
            this.setState({teacherArr: teacher})
    }

    componentDidMount() {
        this.setState({teacherArr: teacher})
    }

    render(){
        let data = [{
            value: 'All Grades',
            },{
            value: 'Junior',
            }, {
            value: 'Senior',
            }, {
            value: 'Advanced',
        }];

        return(
            <View style={styles.formContainer}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <Text style={styles.filterText}>Sort By : </Text>
                    </View>
                    <Dropdown
                            label="Grade"
                            data={data}
                            containerStyle={styles.dropdown}
                            dropdownOffset={{top:0,left:0}}
                            onChangeText={text =>this.handleChangedText(text)}
                            rippleInsets={{top:0,bottom:0}}
                            dropdownPosition={1}
                        />
                </View>
                <FlatList data={this.state.teacherArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        padding: 15
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
    }
});

AppRegistry.registerComponent('steamlab', () => Form)