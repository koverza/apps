import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/Login';
import TabBottom from './TabBottom';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    // const [isLogged, setLogged] = useState(false)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TabBottom" component={TabBottom} />
                {/* <Stack.Screen name="Main" component={Main} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// {!isLogged ?
//     <>
//         {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
//         <Stack.Screen name="Login" component={Login} />
//     </>
//     :
//     <>
//         <Stack.Screen name="Main" component={Main} />
//     </>
// }
