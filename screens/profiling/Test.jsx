import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default function Test({ navigation }) {
	return (
		<ScrollView>
			<View style={[styles.menubar1, { height: 110 }]}>
				<TouchableOpacity
					style={[styles.icon21, { width: '10%' }]}
					onPress={() => navigation.goBack()}>
					<Ionicons
						name='arrow-back-outline'
						color={'white'}
						size={25}
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>
				</TouchableOpacity>
				<Text
					style={{
						color: 'white',
						fontSize: 18,
						fontWeight: 'bold',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}>
					Update Location
				</Text>
				<View style={{ width: '10%', marginRight: 10 }}></View>
			</View>

			<View style={styles.midview}>
				<View style={{ alignSelf: 'center', marginBottom: 15 }}>
					<Text
						style={{
							alignSelf: 'center',
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 40,
						}}>
						Location
					</Text>
					<Text style={{ color: 'black' }}>
						Set the marker to your new Location
					</Text>
				</View>
				<View style={styles.partView7}>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Location
					</Text>
					<TextInput
						placeholder='London'
						placeholderTextColor='gray'
						style={styles.input}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						On Map
					</Text>
					<MapView
						style={{ height: 350, marginTop: 10 }}
						provider={PROVIDER_GOOGLE}
						initialRegion={{
							latitude: 51.5072,
							longitude: -0.12574,
							latitudeDelta: 0.04,
							longitudeDelta: 0.05,
						}}>
						<Marker
							coordinate={{
								latitude: 51.5072,
								longitude: -0.12574,
							}}
							title={'london'}></Marker>
					</MapView>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
  menubar1: {
    flexDirection: 'row',
    backgroundColor: '#020D28',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  
  icon21: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  
  messagebar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconview: {
    width: '17%',
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020D28',
  },
  messagebox: {
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 10,
    padding: 2,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: '#ffffff',
  },
});


