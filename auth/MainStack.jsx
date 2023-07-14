import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/profiling/Login';
import Test from '../screens/profiling/Test';
import TabNavigator from '../screens/TabScreens/TabNavigator';
import MapScreen from '../screens/StackScreens/MapScreen';
import EventInfoScreen from '../screens/StackScreens/EventInfoScreen';
import SecondaryScreen from '../screens/StackScreens/SecondaryScreen';
import ProfileScreen1 from '../screens/StackScreens/ProfileScreen1';
import { UserContext } from '../context/UserContext';
import Loader from '../components/Loader';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='TabNavigator' component={TabNavigator} />
			<Stack.Screen name='EventInfoScreen' component={EventInfoScreen} />
			<Stack.Screen name='SecondaryScreen' component={SecondaryScreen} />
			<Stack.Screen name='MapScreen' component={MapScreen} />
			<Stack.Screen name='ProfileScreen1' component={ProfileScreen1} />
			
		</Stack.Navigator>
	);
};

export default MainStack;
