import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    loginColumn: {},
    inputText: {
        color: 'white',
        fontSize: 14,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
        paddingLeft: 5,
        color: 'white',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        marginTop: 5,
    },
    button: {
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#F8D94F',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default styles;
