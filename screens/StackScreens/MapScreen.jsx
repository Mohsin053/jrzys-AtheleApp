import React, { useState } from 'react';
import {
	Text,
	SafeAreaView,

} from 'react-native';

export default function MapScreen({ navigation, route }) {
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<Text style={{alignSelf:'center',color:'black',fontSize:50}}>Map</Text>
		</SafeAreaView>
	);
}

