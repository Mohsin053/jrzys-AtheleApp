import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
const ProfileScreen1 = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    date: "2023/7/7",
    name: "John Doe",
    nationality: "Spa",
    docId: 3514077,
    bloodType: " Grupo A ",
    phoneNumber: "+8801800000000",
    phoneNumber1: "+8801800000001",
    address: "121 Hamilton street, London",
  });

  const handleDialButtonPress = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <LinearGradient
      colors={["#FCDD47", "#F9F8F8", "#F9F8F8", "#FCDD47"]}
      locations={[0, 0.3, 0.7, 1]}
      start={{ x: -0.3, y: 0 }}
      end={{ x: 1.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.mainview}>
            <View style={styles.imgview}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ height: "20%", width: "10%", alignItems: "center" }}
                >
                  <Ionicons name="chevron-back" color={"black"} size={30} />
                </TouchableOpacity>
                <View style={styles.img1view}>
                  <Image
                    source={require("../../assets/salvabot_logo.png")}
                    style={styles.img}
                  ></Image>
                </View>
                <View style={{ width: "10%" }}></View>
              </View>
              <Text style={styles.text}>Mi perfil</Text>
            </View>
          </View>

          <View style={styles.shadowbar}>
            <View style={[styles.button11, { height: 30 }]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Suscripción</Text>
              </View>
              <View style={{ width: "40%" }}></View>
            </View>
            <View style={[styles.button11, { height: 30 }]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Fecha de caducidad:</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text13}>{userInfo.date}</Text>
              </View>
            </View>
          </View>

          <View style={styles.shadowbar}>
            <View style={[styles.button11]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Nombre completo:</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text13}>{userInfo.name}</Text>
              </View>
            </View>
            <View style={[styles.button11]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Nacionalidad:</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text13}>{userInfo.nationality}</Text>
              </View>
            </View>
            <View style={[styles.button11]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Identificación del documento:</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text13}>{userInfo.docId}</Text>
              </View>
            </View>
            <View style={[styles.button11]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Tipo de sangre: </Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text13}>{userInfo.bloodType}</Text>
              </View>
            </View>
          </View>

          <View style={styles.shadowbar}>
          <View style={[styles.button11, { height: 30 }]}>
            <View style={{ width: "40%" }}>
              <Text style={styles.text12}>Número de teléfono</Text>
            </View>
            <View style={{ width: "40%" }}></View>
          </View>
          <TouchableOpacity style={[styles.button11, { height: 30 }]} onPress={() => handleDialButtonPress(userInfo.phoneNumber)}>
            <View style={{ width: "60%", flexDirection: "row" }}>
              <Ionicons
                name="call"
                color={"#677294"}
                size={20}
                style={{ alignSelf: "center" }}
              />
              <Text style={[styles.text14, { marginLeft: 10 }]}>
                {userInfo.phoneNumber}
              </Text>
            </View>
            <View style={{ width: "20%" }}>
              <Text style={styles.text13}>(Principal)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button11, { height: 30 }]} onPress={() => handleDialButtonPress(userInfo.phoneNumber1)}>
            <View style={{ width: "55%", flexDirection: "row" }}>
              <Ionicons
                name="call"
                color={"#677294"}
                size={20}
                style={{ alignSelf: "center" }}
              />
              <Text style={[styles.text14, { marginLeft: 10 }]}>
                {userInfo.phoneNumber1}
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text style={styles.text13}>(Emergencia)</Text>
            </View>
          </TouchableOpacity>
        </View>

          <View style={styles.shadowbar}>
            <View style={[styles.button11, { height: 30 }]}>
              <View style={{ width: "40%" }}>
                <Text style={styles.text12}>Dirección</Text>
              </View>
              <View style={{ width: "40%" }}></View>
            </View>
            <TouchableOpacity
              style={[styles.button11, { height: 30 }]}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <View style={{ width: "70%" }}>
                <Text style={styles.text14}>{userInfo.address}</Text>
              </View>
              <View style={{ width: "10%" }}>
                <Ionicons
                  name="chevron-forward"
                  color={"#677294"}
                  size={20}
                  style={{ alignSelf: "center" }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button11, { height: 30 }]}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <View style={{ width: "70%" }}>
                <Text style={styles.text14}>{userInfo.address}</Text>
              </View>
              <View style={{ width: "10%" }}>
                <Ionicons
                  name="chevron-forward"
                  color={"#677294"}
                  size={20}
                  style={{ alignSelf: "center" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "white",
  },
  mainview: {
    padding: "3%",
  },
  imgview: {
    alignItems: "center",
  },
  img: {
    height: 120,
    width: 120,
  },
  img1view: {
    marginBottom: "5%",
    marginTop: "5%",
    width: "80%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins",
    color: "black",
    fontWeight: "900",
    fontSize: 24,
    marginBottom: "5%",
  },
  text12: {
    color: "#E45353",
    fontWeight: "medium",
    fontSize: 13,
  },
  text13: {
    color: "#677294",
    fontWeight: "regular",
    fontSize: 13,
    marginLeft: "auto",
  },
  text14: {
    color: "#677294",
    fontWeight: "regular",
    fontSize: 13,
  },
  button11: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 12,
  },
  shadowbar: {
    elevation: 5,
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "5%",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default ProfileScreen1;
