import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';

export const RootScreen = (RootStack) => {
    return <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Login" component={login} />
        </RootStack.Navigator>
    </NavigationContainer>;
}
