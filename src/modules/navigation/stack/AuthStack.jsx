import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../../auth/Profile'
import { createStackNavigator } from '@react-navigation/stack'
import Selected from '../../auth/Selected'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Profile'
            component={Profile}
            options={{title: 'Profile'}}
        />
        <Stack.Screen
            name='Selected'
            component={Selected}
            options={{title: 'Imagen Seleccionada'}}
            
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})