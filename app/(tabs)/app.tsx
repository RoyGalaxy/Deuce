import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Community from './Community';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons';
import HeaderRight from '@/components/HeaderRight';

const Tab = createBottomTabNavigator();

const app = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Community') {
                        iconName = 'people';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: () => {}
            })}
        >
            
            <Tab.Screen name="Home" component={Home} options={{title: "Home"}}/>
            <Tab.Screen name="Community" component={Community} options={{title: "Community"}}/>
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    );
};

export default app;