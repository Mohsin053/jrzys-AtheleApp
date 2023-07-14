import { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import LinearGradient from "react-native-linear-gradient";
import loginValidationSchema from "../../utils/validations/loginValidation";
import url from "../../utils/url.js";
import { getFCM } from "../../utils/pushNotifications";
import { AuthContext } from "../../auth/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({navigation}) => {
  const { logIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = async (values) => {
  //   setLoading(true);
  //   const token = await getFCM();
  //   const opts1 = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: values.username,
  //       password: values.password,
  //     }),
  //   };
  //   const res1 = await fetch(`${url}/users/login`, opts1);
  //   if (!res1.ok) {
  //     setLoading(false);
  //     setError("Invalid Username or Password.");
  //     setInterval(() => {
  //       setError("");
  //     }, 10000);
  //   } else {
  //     const data = await res1.json();
  //     const opts2 = {
  //       method: "PATCH",
  //       headers: {
  //         Authorization: `Bearer ${data.token}`,
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         token: token,
  //       }),
  //     };
  //     const res2 = await fetch(`${url}/users/fcm`, opts2);
  //     if (res2.ok) {
  //       logIn(data.token);
  //     } else {
  //       setLoading(false);
  //       setError("Something went Wrong");
  //       setInterval(() => {
  //         setError("");
  //       }, 10000);
  //     }
  //   }
  // };

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.mainview}>
            <View style={styles.imgview}>
              <Image
                source={require("../../assets/salvabot_logo.png")}
                style={styles.img}
              ></Image>
              <Text style={styles.text}>Bienvenido de nuevo</Text>
              <Text style={styles.text1}>Ingrese a su cuenta</Text>
            </View>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                isValid,
                touched,
                values,
              }) => (
                <View>
                  <TextInput
                    outlineColor={"#677294"}
                    style={styles.textinput}
                    mode="outlined"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    placeholder="Nombre de usuario"
                    placeholderTextColor={"#677294"}
                    theme={{
                      roundness: 12,
                    }}
                  />
                  {errors.username && touched.username && (
                    <Text style={styles.errorText}>{errors.username}</Text>
                  )}
                  <TextInput
                    style={styles.textinput}
                    mode="outlined"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholder="Contraseña"
                    outlineColor={"#677294"}
                    secureTextEntry={show ? false : true}
                    placeholderTextColor={"#677294"}
                    right={
                      <TextInput.Icon
                        icon="eye"
                        onPress={() => setShow((prevShow) => !prevShow)}
                      />
                    }
                    theme={{
                      roundness: 12,
                    }}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}

                  <TouchableOpacity
                    style={[styles.touchsign]}
                    onPress={() => navigation.navigate("TabNavigator")}
                    disabled={
                      !isValid ||
                      values.password === "" ||
                      values.username === ""
                    }
                  >
                    {loading ? (
                      <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                      <Text style={styles.textsign}>Acceso</Text>
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
          {error !== "" ? (
            <Text
              style={[
                styles.textbottom,
                {
                  color: "red",
                  textAlign: "center",
                  fontWeight: "bold",
                },
              ]}
            >
              {error}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainview: {
    padding: "3%",
  },
  imgview: {
    alignItems: "center",
  },
  img: {
    height: 170,
    width: 170,
    marginTop: "10%",
    marginBottom: "10%",
  },
  text: {
    fontFamily: "Poppins",
    color: "black",
    fontWeight: "900",
    fontSize: 24,
    marginBottom: "5%",
  },
  text1: {
    fontFamily: "Poppins",
    color: "#677294",
    fontWeight: "regular",
    fontSize: 14,
    marginBottom: "10%",
  },

  textinput: {
    backgroundColor: "#F5F9FF",
    marginTop: 10,
    fontSize: 14,
    width: "90%",
    alignSelf: "center",
  },
  touchsign: {
    borderRadius: 12,
    height: 55,
    width: "90%",
    marginTop: "10%",
    marginBottom: "10%",
    backgroundColor: "#E45353",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textsign: {
    color: "mintcream",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 16,
  },
  textbottom: {
    color: "black",
  },
  errorText: {
    fontSize: 10,
    color: "red",
    alignSelf: "flex-end",
  },
});

export default Login;
