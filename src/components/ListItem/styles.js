import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    round: {
        borderRadius: '50rem',
        width: '50rem',
        height: '50rem',
        justifyContent: 'center',
        marginRight: '10rem'
    },
    lightblue: {
        backgroundColor: '$iconBackground'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        padding: '10rem',
        borderBottomWidth: '1rem',
        borderBottomColor: '$lineColor',
    },
    listDetail: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})