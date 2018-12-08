import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { DataTable, Row, Cell, Header, HeaderCell} from 'react-native-data-table';

export default class Table2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {dataSource : []}
    }

    renderRow(record) {
        <Row>
          <Cell>record.classCategory</Cell>
          <Cell>record.session</Cell>
          <Cell>record.isAttend?'Attend':'Absent'</Cell>
        </Row>
    } 
    
    renderHeader(){
        <Header>
            <HeaderCell>Class Category</HeaderCell>
            <HeaderCell>Sessions</HeaderCell>
            <HeaderCell>Attendance</HeaderCell>
        </Header>
    }
    
    render(){
        this.setState({
            dataSource: this.state.dataSource.concat(this.props.tableData)
        })
        return(
            <View style={styles.container}>
                <DataTable
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30 },
});

AppRegistry.registerComponent('steamlab', () => Table2)