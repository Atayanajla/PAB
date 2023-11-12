import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image,} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      
        <View style={styles.container2}>
            <Text>Kategori</Text>
            <TouchableOpacity>
              <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.container3}>
        <TextInput style={styles.input} placeholder="Search..." />
            <Ionicons name="search" size={24} color="black" style={styles.icon2}/>
        </View>

        <View style={styles.container4}>
          <TouchableOpacity style={styles.button}>
              <Text>React</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Flutter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Golang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Lara</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container5}>
          <Text style={styles.TextLeft}>Populer</Text>
            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.ButtonText}>See More</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container6}>
          <View style={styles.imageContainer}>
              <View style={styles.imageItem}>
                <Image source={require("./assets/gambar1.jpg")} style={styles.image}/>
              </View>

              <View style={styles.imageItem}>
                <Image source={require("./assets/gambar2.jpg")} style={styles.image}/>
              </View>
          </View>
        </View>

        <View style={styles.container5}>
          <Text style={styles.TextLeft}>Rekomendasi</Text>
            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.ButtonText}>See More</Text>
            </TouchableOpacity>
        </View>
          
        <View style={styles.container7}>
          <View style={styles.container8}>
            <View style={styles.imageItem2}>
              <Image source={require("./assets/gambar1.jpg")} style={styles.image2}/>
            </View>
            <View style={styles.ket}>
              <Text style={styles.Text2}>Laravel dalam 20 hari</Text>
              <Text style={styles.Text3}>free</Text>
            </View>
          </View>

          <View style={styles.container8}>
            <View style={styles.imageItem2}>
              <Image source={require("./assets/gambar1.jpg")} style={styles.image2}/>
            </View>
            <View style={styles.ket}>
              <Text style={styles.Text2}>React advance 30 hari</Text>
              <Text style={styles.Text3}>Rp 200.000 / paket</Text>
            </View>
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
    justifyContent: "space-between",
    flex: 1,
  },
  container3: {
    backgroundColor: "white",
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
  },
  icon2: {
    marginRight: 10,
  },
  container4: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    marginRight: 20,
    backgroundColor: "azure",
    padding: 8,
    borderRadius: 6,
  },
  container5: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  TextLeft: {
    fontSize: 24,
  },
  seeMoreButton: {
    backgroundColor: "white",
  },
  seeMoreButtonText: {
    fontSize: 16,
    color: "black",
  },
  container6: {
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
  },
  imageItem: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  container7: {
    marginTop: 10,
    flex: 1,
  },
  container8: {
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  Text2:{
    marginLeft: 20,
  },
  Text3:{
    marginLeft: 20,
    marginTop: 5,
    color: "blue",
  },
});
