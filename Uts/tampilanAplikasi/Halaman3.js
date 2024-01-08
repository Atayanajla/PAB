import React from "react";
import { View,Text,StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";

export default function Halaman3() {
  const price = 250000
  const [
    totalPaket, 
    setTotalPaket
  ] = useState('');
  const [
    kupon, 
    setKupon
  ] = useState('');
  const [
    totalHarga, 
    setTotalHarga
  ] = useState(0)

  function totPaket (nilaiPaket) {
    setTotalPaket(parseFloat(nilaiPaket))
  }
  const kuponSekarang = (getKupon) => {
    setKupon(getKupon)
  }
  function tombolHitung() {
    const voucherCode = kupon.toUpperCase();

    switch (voucherCode) {
      case "DISKON":
        const discountPercentage = 20;
        const discountMultiplier = discountPercentage / 100;
        const originalPrice = price * totalPaket;
        const discountedAmount = originalPrice * discountMultiplier;
        const discountedPrice = originalPrice - discountedAmount;
        setTotalHarga(discountedPrice);
        break;
      default:
        setTotalHarga(price * totalPaket);
    }
  }
  return (
    <ScrollView style={{ backgroundColor: 'lightblue' }}>
      <View style={styles.container}>

        <View style={styles.container2}>
          <Text style={styles.Text1}>React native untuk pemula</Text>
          <Text style={styles.Text2}>Price</Text>
          <Text style={styles.Text3}>Rp {price} / paket</Text>
        </View>

        <View style={styles.container3}>
          <View style={styles.kotakinput}>
            <Text style={styles.labelInput}>Jumlah Paket</Text>
            <TextInput style={styles.input} onChangeText={totPaket}/>
            <Text style={styles.labelInput}>Voucher Code</Text>
            <TextInput style={styles.input} onChangeText={kuponSekarang}/>
          </View>

          <View style={styles.ket}>
            <Text>Jumlah paket : {totalPaket}</Text>
            <Text>Voucher code: {kupon}</Text>
          </View>

          <View style={styles.price}>
            <Text>Total Bayar</Text>
            <Text style={styles.textPrice}>Rp {totalHarga} / paket</Text>
          </View>

          <View style={styles.container4}>
            <TouchableOpacity style={styles.priceButton} onPress={tombolHitung}>
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
    flex: 1,
  },
  Text1: {
    margin: 15,
    fontWeight: '500',
    fontSize: 25,
  },
  Text2: {
    marginTop: 5,
    marginLeft: 15,
  },
  Text3: {
    marginVertical: 10,
    marginLeft: 15,
    fontWeight: '600',
    fontSize: 20,
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
    marginTop: 50,
    flexDirection: "row",
    flex: 1,
    justifyContent: 'center'
  },
  priceButton: {
    marginTop: 10,
    backgroundColor: "#0a8ed9",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    width: 120,
  },
  priceText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  labelInput: {
    marginLeft: 8
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  }
});
