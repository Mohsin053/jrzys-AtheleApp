import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/profiling/Login';
import Register from '../screens/profiling/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={Register} />
		</Stack.Navigator>
	);
};

export default AuthStack;
