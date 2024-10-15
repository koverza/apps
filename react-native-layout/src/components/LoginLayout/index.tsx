import React from 'react';
import {View} from 'react-native';
import styles from './styles';

function LoginLayout(props: string | any) {
    console.log('sdad');

    return (
        <View style={styles.container}>
            <View style={styles.top} />
            <View style={styles.content}>{props.children}</View>
        </View>
    );
}

export default LoginLayout;
