import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '../screens/TabScreens/TabNavigator';
import MapScreen from '../screens/StackScreens/MapScreen';
import EventInfoScreen from '../screens/StackScreens/EventInfoScreen';
import SecondaryScreen from '../screens/StackScreens/SecondaryScreen';
import Register from '../screens/StackScreens/Register';
import { UserContext } from '../context/UserContext';
import Loader from '../components/Loader';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			
			<Stack.Screen name='TabNavigator' component={TabNavigator} />
			<Stack.Screen name='EventInfoScreen' component={EventInfoScreen} />
			<Stack.Screen name='SecondaryScreen' component={SecondaryScreen} />
			<Stack.Screen name='MapScreen' component={MapScreen} />
		</Stack.Navigator>
	);
};

export default MainStack;
