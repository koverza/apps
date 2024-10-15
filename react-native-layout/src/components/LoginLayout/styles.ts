import {StyleSheet} from 'react-native';
import {colors} from '@theme/colors';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: colors.violet,
    },
    image: {
        width: 150,
        height: 80,
    },
    top: {
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: '100%',
        marginTop: 27,
    },
});

export default styles;
