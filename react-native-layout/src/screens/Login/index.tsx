import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LoginLayout from '@components/LoginLayout';
import {setEmail, setPassword} from '../../store/actions/actions';
import styles from './styles';

function Login({navigation}: any): React.JSX.Element {
    const dispatch = useDispatch();

    const email = useSelector((state: any) => state.user.email);
    const password = useSelector((state: any) => state.user.password);

    const loginButton = () => {
        if (email == 'a' && password == '1') {
            navigation.navigate('TabBottom');
        } else {
            throw Error('error');
        }
    };

    return (
        <LoginLayout>
            <Text style={styles.title}>Login</Text>
            <View style={styles.loginColumn}>
                <View>
                    <View>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => {
                                dispatch(setEmail(value));
                            }}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => {
                                dispatch(setPassword(value));
                            }}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </LoginLayout>
    );
}

export default Login;
