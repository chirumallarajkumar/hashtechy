import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'User List' }} />
                <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'User Detail' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
