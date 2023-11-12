import React from "react";
import { View,Text,StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.container2}>
          <Text>bagain awal......</Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.Text1}>Deskripsi</Text>
          <Text style={styles.Text2}>Course ini untuk mereka yang benar-benar mau belajar tentang react native....</Text>
        </View>

        <View style={styles.container4}>
          <View style={styles.user}>
            <Image source={require('./assets/gambar1.jpg')} style={{width:50, height:50}}/>
            <View style={styles.user2}>
              <Text style={styles.Text3}>Ataya Najla</Text>
              <Text style={styles.Text4}>main tutor</Text>
            </View>
          </View>

          <View style={styles.iconuser}>
            <TouchableOpacity>
              <Ionicons name="call-outline" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="chatbox-outline" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container3}>
          <Text style={styles.Text1}>Gallery</Text>
        </View>

        <View style={styles.container5}>
          <View style={styles.imageItem}>
            <Image source={require("./assets/gambar3.jpg")} style={styles.image2}/>
          </View>
          <View style={styles.imageItem}>
            <Image source={require("./assets/gambar4.jpg")} style={styles.image2}/>
          </View>
          <View style={styles.imageItem}>
            <Image source={require("./assets/gambar5.jpg")} style={styles.image2}/>
          </View>
          <View style={styles.imageItem}>
            <Image source={require("./assets/gambar6.jpg")} style={styles.image2}/>
          </View>
        </View>

        <View style={styles.container6}>
          <View style={styles.price}>
              <Text style={styles.Text3}>Price</Text>
              <Text style={styles.Text4}>Rp 200.000 / paket</Text>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceText}>Ambil</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 30,
  },
  container2: {
    flexDirection: "row",
    flex: 1,
  },
  container3: {
    marginTop: 10,
    flex: 1,
  },
  Text1: {
    fontSize: 20,
  },
  Text2: {
    marginTop: 10,
    fontSize: 15,
  },
  container4: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
  },
  user: {
    flexDirection: "row",
  },
  Text3: {
    marginLeft: 10,
    fontSize: 15,
  },
  Text4: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 15,
  },
  iconuser: {
    flexDirection: "row",
    flex: 1,
  },
  container5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  image2: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  imageItem: {
    marginRight: 10,
  },
  container6: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceButton: {
    marginTop: 10,
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 6,
  }
});
