import { StyleSheet, Image, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
const Register = ({ navigation }) => {
  return (
    <LinearGradient
        colors={['#FCDD47', '#F9F8F8', '#F9F8F8', '#FCDD47']}
        locations={[0, 0.3, 0.7, 1]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1.3, y: 1 }}
        style={styles.scrollview}
      >
      <View style={styles.imgview}>
        <Image
          source={require("../../assets/salvabot_logo.png")}
          style={styles.img}
        ></Image>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 170,
    width: 170,
  },
});

export default Register;
