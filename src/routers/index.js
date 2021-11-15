import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Homepage, Detail} from '../screens';

const Stack = createNativeStackNavigator();

export default function RootNavigator({token, ...props}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
