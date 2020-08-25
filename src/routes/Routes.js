/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Search from '../pages/Search'
import Details from '../pages/Details'


const { Navigator, Screen } = createStackNavigator()


export default function PreferencesRoutes() {
    return (
        <NavigationContainer independent={true}>

            <Navigator>
                <Screen 
                    name="Search" 
                    component={Search} 
                    options={{ 
                        headerShown: false, 
                    }} 
                />
                
                <Screen 
                    name="Details" 
                    component={Details} 
                    screenOptions={{ 
                        headerShown: true,
                    }} 
                />
            </Navigator>

        </NavigationContainer>
    )
}