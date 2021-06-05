import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import home from './screens/drawer/home';
import account from './screens/drawer/account';

export function DrawerScreens(Drawer) {
  return <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Account" component={account} />
    </Drawer.Navigator>
  </NavigationContainer>;
}
