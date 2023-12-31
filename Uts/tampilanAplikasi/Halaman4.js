import React from "react";
import { View, Text, StyleSheet, ScrollView,Image,} from "react-native";

export default function Halaman4() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container6}>
          <ScrollView horizontal>
            <View>
              <View style={styles.imageItem}>
                <Image
                  source={require("../assets/gambar2.jpg")}
                  style={styles.image}
                />
                <View style={styles.merekContainer}>
                  <Text style={styles.judul}>Laravel sebentar</Text>
                  <Text style={styles.bawahJudul}>Khusus pemula</Text>
                </View>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require("../assets/gambar2.jpg")}
                  style={styles.image}
                />
                <View style={styles.merekContainer}>
                  <Text style={styles.judul}>SEO Essentials</Text>
                  <Text style={styles.bawahJudul}>Panduan Dasar untuk Optimalisasi Mesin Pencari</Text>
                </View>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require("../assets/gambar2.jpg")}
                  style={styles.image}
                />
                <View style={styles.merekContainer}>
                  <Text style={styles.judul}>Mobile App Development with Flutter</Text>
                  <Text style={styles.bawahJudul}>Dari Pemula hingga Mahir</Text>
                </View>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require("../assets/gambar2.jpg")}
                  style={styles.image}
                />
                <View style={styles.merekContainer}>
                  <Text style={styles.judul}>Introduction to Cybersecurity</Text>
                  <Text style={styles.bawahJudul}>Keamanan Informasi untuk Pemula</Text>
                </View>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require("../assets/gambar2.jpg")}
                  style={styles.image}
                />
                <View style={styles.merekContainer}>
                  <Text style={styles.judul}>Laravel Lama</Text>
                  <Text style={styles.bawahJudul}>Khusus pemula</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  container6: {
    marginTop: 20,
  },
  imageItem: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 330,
    height: 150,
    borderRadius: 10,
  },
  merekContainer: {
    marginTop: -80,
    padding: 25,
    paddingLeft: 10,
  },
  judul: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 3,
  },
  bawahJudul: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
