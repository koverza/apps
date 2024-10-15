import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Generator from '@screens/Generator';
import Map from '@screens/Map';
import Tasks from '@screens/Tasks';

const BottomTab = createBottomTabNavigator();

export default function TabBottom({navigation, client}: any) {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: 'white',
                    borderWidth: 0,
                },
                headerShown: true,
                // headerRight: ({ navigation }: any) => (
                //     // <TouchableOpacity>
                //     //     {/* <Ionicons
                //     //         onPress={() => navigation.navigate("Login")}
                //     //         style={{ marginRight: 10 }}
                //     //         name="ios-exit-outline"
                //     //         size={24}
                //     //         color="black"
                //     //     /> */}
                //     // </TouchableOpacity>

                // ),
            }}>
            <BottomTab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        // <Entypo
                        //     name="globe"
                        //     size={24}
                        //     color="black"
                        //     style={{ color: focused ? "#147DE6" : "grey" }}
                        // />
                        <MaterialCommunityIcons name="home" color="red" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Map"
                component={Map}
                // options={{
                //     headerTitle: '',
                //     tabBarIcon: ({ focused }) => (
                //         // <FontAwesome
                //         //     name="book"
                //         //     size={24}
                //         //     color="black"
                //         //     style={{ color: focused ? "#147DE6" : "grey" }}
                //         // />
                //     ),
                // }}
            />
            <BottomTab.Screen
                name="Generator"
                component={Generator}
                // options={{
                //     headerTitle: '',
                //     tabBarIcon: ({ focused }) => (
                //         // <Ionicons
                //         //     name="chatbubbles-outline"
                //         //     size={24}
                //         //     color="black"
                //         //     style={{ color: focused ? "#147DE6" : "grey" }}
                //         // />
                //     ),
                // }}
            />
        </BottomTab.Navigator>
    );
}

// <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Settings" component={SettingsScreen} />
//             </Tab.Navigator>
