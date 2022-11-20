import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../data/Screens/HomeScreen';
import SingleProductScreen from '../data/Screens/SingleProductScreen';
import ShippingScreen from '../data/Screens/ShippingScreen';
import PaymentScreen from '../data/Screens/PaymentScreen';
import PlaceOrderScreen from '../data/Screens/PlaceOrderScreen';


const Stack = createNativeStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{
      headerShown: false,
    }}
>
 <Stack.Screen name="Home" component={HomeScreen}/>
 <Stack.Screen name="Single" component={SingleProductScreen}/>
 <Stack.Screen name="Shipping" component={ShippingScreen}/>
 <Stack.Screen name="Checkout" component={PaymentScreen}/>
 <Stack.Screen name="Placeorder" component={PlaceOrderScreen}/>
</Stack.Navigator>
  );
};

export default StackNav