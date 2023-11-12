import React from "react";
import { View,Text,StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.container2}>
          <Text style={styles.Text1}>React native untuk pemula</Text>
          <Text style={styles.Text2}>Price</Text>
          <Text style={styles.Text3}>Rp 200.000 / paket</Text>
        </View>

        <View style={styles.container3}>
          <View style={styles.kotakinput}>
            <Text>kotak input jumlah paket</Text>
            <Text>vaorce code</Text>
          </View>

          <View style={styles.ket}>
            <Text>jumalah paket : 3</Text>
            <Text>vaorce code: COUPON</Text>
          </View>

          <View style={styles.price}>
            <Text>Total Bayar</Text>
            <Text>Rp 200.000 / paket</Text>
          </View>

          <View style={styles.container4}>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceText}>Hitung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceText}>checkout</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "lightblue",
  },
  container2: {
    backgroundColor: "azure",
    flex: 1,
  },
  Text1: {
    margin: 15,
  },
  Text2: {
    marginTop: 5,
    marginLeft: 15,
  },
  Text3: {
    marginTop: 5,
    marginLeft: 15,
  },
  container3: {
    margin: 25,
  },
  ket: {
    marginTop: 15,
  },
  price: {
    marginTop: 15,
  },
  container4: {
    marginTop: 15,
    flexDirection: "row",
    flex: 1,
  },
  priceButton: {
    marginTop: 10,
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 6,
  }
});
