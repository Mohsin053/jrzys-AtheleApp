import React,{ useState, useEffect,useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Modal,
  Button
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const data = [
  { id: "1", name: "VPN", state: "DE" },
  { id: "2", name: "VPN", state: "EN" },
  { id: "3", name: "VPN", state: "EN" },
  { id: "4", name: "VPN", state: "EN" },
  { id: "5", name: "VPN", state: "EN" },
  { id: "6", name: "VPN", state: "EN" },
  { id: "7", name: "VPN", state: "EN" },
];

export default function HomeScreen({ navigation }) {
  const img1 = require("../../assets/salvabot_logo.png");
  const [name, setname] = useState("Abdalá Mamun");
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handlePressIn = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  };

  const handlePressOut = () => {
    clearTimeout(timeoutRef.current); 
  };

  const handlePopupDismiss = () => {
    setShowPopup(false);
  };

  const ListFooterComponent = () => (
    <SafeAreaView>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <View>
            <Text style={styles.text2}>Bienvenido de nuevo</Text>
            <Text style={styles.text1}>{name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen1')}>
          <Image source={img1} style={styles.img}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttontab} onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Text style={styles.buttontext}>Prensa 2 segundos</Text>
      </TouchableOpacity>
      <Modal visible={showPopup} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>Modo activado</Text>
            <Button title="Ok" onPress={handlePopupDismiss} color={'#D52C2C'}/>
          </View>
        </View>
      </Modal>

      <Text style={styles.text3}>En custodia</Text>

      <FlatList
        style={styles.list1}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
    </SafeAreaView>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.button11]} onPress={() => navigation.navigate('SecondaryScreen')}>
      <View style={{ width: "25%" }}>
        <View style={styles.buttonround}></View>
      </View>
      <View style={{ width: "55%" }}>
        <Text style={styles.text12}>{item.name}</Text>
      </View>
      <View style={{ width: "20%" }}>
        <Text
          style={[
            styles.text13,
            { color: item.state === "EN" ? "#49D408" : "gray" },
          ]}
        >
          {item.state}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
        colors={['#FCDD47', '#F9F8F8', '#F9F8F8', '#FCDD47']}
        locations={[0, 0.3, 0.7, 1]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1.3, y: 1 }}
        style={{flex:1}}
      >
    <FlatList
      data={[]}
      renderItem={() => null}
      ListFooterComponent={ListFooterComponent}
      
    />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  uppertab: {
    height: 150,
    backgroundColor: "#D52C2C",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  innertab: {
    width: "95%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  img: {
    height: 60,
    width: 60,
  },
  text1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  text2: {
    fontWeight: "light",
    color: "white",
    fontSize: 20,
  },
  text3: {
    fontWeight: "medium",
    color: "black",
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttontext: {
    fontWeight: "medium",
    color: "white",
    fontSize: 20,
    padding: 5,
  },
  buttontab: {
    height: 180,
    width: 180,
    backgroundColor: "#D52C2C",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
  buttonround: {
    height: 30,
    width: 30,
    backgroundColor: "#D52C2C",
    alignSelf: "center",
    borderRadius: 100,
  },
  text12: {
    color: "black",
    fontWeight: "regular",
    fontSize: 20,
  },
  text13: {
    fontWeight: "regular",
    fontSize: 18,
  },
  button11: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  list1: {
    alignSelf: "center",
    width: "90%",
    elevation: 5,
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
});
