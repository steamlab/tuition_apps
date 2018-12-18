import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height

export default EStyleSheet.create({
    header: {
        backgroundColor: '$primaryBlue',
        height: screenHeight * 0.07
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 0.5,
        justifyContent: 'center',
        alignContent: 'flex-start',
        paddingLeft: '10rem'
    },
    right: {
        flex: 9.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: '18rem',
        color: '$white',
        fontWeight: 'bold'
    }
})