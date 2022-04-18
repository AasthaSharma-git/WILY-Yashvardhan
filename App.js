import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Transaction from './screens/Transactions';
import Search from './screens/Search';

const Tab= createMaterialBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TransactionScreen" component={Transaction}/>
        <Tab.Screen name="SearchScreen" component={Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



