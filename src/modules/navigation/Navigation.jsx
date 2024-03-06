import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, color } from '@rneui/base'
import AuthStack from './stack/AuthStack'
import HomeStack from './stack/HomeStack'
import SearchStack from './stack/SearchStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        return <Icon name={iconName} type={iconType} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >

                <Tab.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home' }} />
                <Tab.Screen name='AuthStack' component={AuthStack} options={{ title: 'Profile' }} />
                <Tab.Screen name='SearchStack' component={SearchStack} options={{ title: 'Search' }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = '';

    switch (routeName) {
        case 'HomeStack':
            iconName = focused ? 'home' : 'home-outline';
            iconType = 'material-community';
            break;

        case 'AuthStack':
            iconName = focused ? 'account' : 'account-outline';
            iconType = 'material-community';
            break;

        case 'SearchStack':
            iconName = focused ? 'magnify' : 'magnify';
            iconType = 'material-community';
            break;
    }

    return {iconName, iconType};
}

const styles = StyleSheet.create({})