import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from "react-native-vector-icons/Ionicons";

const Test = ({navigation,route}) => {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.uppertab}>
          <View style={styles.innertab}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" color={"black"} size={30} />
            </TouchableOpacity>
            <View>
              <View style={styles.imgview}>
                <Text style={styles.text}>Geolocalización</Text>
              </View>
            </View>
            <View>
              <Ionicons name="chevron-back" color={"transparent"} size={30} />
            </View>
          </View>
        </View>
        <WebView
          style={styles.map}
          source={{ uri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(itemId)}` }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    marginTop:100
  },
  map: {
    flex: 1,
  },
  uppertab: {
    height: 80,
    alignItems: "center",
  },
  innertab: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgview: {
    alignItems: "center",
  },
  img: {
    height: 120,
    width: 120,
    marginTop: "5%",
    marginBottom: "5%",
  },
  text: {
    fontFamily: "Poppins",
    color: "black",
    fontWeight: "900",
    fontSize: 24,
    marginBottom: "5%",
  },
});

export default Test;
