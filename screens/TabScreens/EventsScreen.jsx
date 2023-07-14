import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { id: "1", name: "VPN", state: "DE" },
  { id: "2", name: "VPN", state: "EN" },
  { id: "3", name: "VPN", state: "EN" },
];

export default function EventScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const ListFooterComponent = () => (
    <SafeAreaView>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handleOptionChange}
            style={styles.picker}
            dropdownIconColor={"black"}
          >
            <Picker.Item label="Filtrar por botones" value="" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
        </View>
      </View>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Text style={styles.text3}>Eventos</Text>
      </View>
      <FlatList
        style={styles.list1}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button11]}
      onPress={() => navigation.navigate("EventInfoScreen")}
    >
      <View style={{ width: "25%" }}>
        <View style={styles.buttonround}></View>
      </View>
      <View style={{ width: "55%" }}>
        <Text style={styles.text12}>{item.name}</Text>
      </View>
      <View style={{ width: "20%" }}>
        <Ionicons
          name="chevron-forward"
          color={"#677294"}
          size={25}
          style={{ alignSelf: "center" }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
        colors={['#FCDD47', '#F9F8F8', '#F9F8F8', '#FCDD47']}
        locations={[0, 0.3, 0.7, 1]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1.5, y: 1 }}
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
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  innertab: {
    elevation: 5,
    width: "90%",
    height: 60,
    borderRadius: 15,
    backgroundColor: "#F5F9FF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text3: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
    marginBottom: 20,
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
  picker: {
    width: "90%",
    color: "#788190",
    backgroundColor: "#F5F9FF",
  },
});
