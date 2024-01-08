import { View, Text, StyleSheet, ScrollView, TextInput, Image, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
import { useEffect, useState } from "react";

const SeeMoreRekomendasi = () => {
    const Halaman2 = () => navigation.navigate('Halaman 2')
    const [Allrecomendasi, setAllrecomendasi] = useState([])
    useEffect(() => {
        const fetching = async() => {
            await axios.get('https://0ee5-2404-8000-1027-16d4-a159-d76f-2063-d83c.ngrok-free.app/courses')
            .then((dataCourse) => {
                console.log(dataCourse.data)
                setAllrecomendasi(dataCourse.data)
            }).catch((e) => {
                console.error(e)
            })
        }
        fetching()
    }, [])
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cont35}>
            <View style={styles.container3}>
              <TextInput style={styles.input} placeholder="Search..." />
              <Ionicons
                name="search"
                size={24}
                color="black"
                style={styles.icon2}
              />
            </View>
          </View>

          {Allrecomendasi.map((item) => {
            return (
              <View style={styles.container7}>
                <View style={styles.container8}>
                  <View style={styles.imageItem2}>
                    <Image
                      source={{ uri: item.Gambar }}
                      style={styles.image2}
                    />
                  </View>
                  <View style={styles.ket}>
                    <Text style={styles.Text2}>{item.Course}</Text>
                    <Text style={styles.Text3}>Rp {item.Harga} / paket</Text>
                    <View style={styles.ket2}>
                      <FontAwesome name="bed" size={24} color="#aeaeae" />
                      <Text>{item.Pengajar}</Text>
                      <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                      <Text>4 Quiz</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        padding: 30,
    },
    container3: {
        backgroundColor: "#f7f7f7",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        flex: 1,
        borderRadius: 10,
        padding: 8,
        justifyContent: 'space-between',
        paddingLeft: 25
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
    Text2: {
        marginLeft: 20,
    },
    Text3: {
        marginLeft: 20,
        marginTop: 5,
        color: "blue",
    },
    ket2: {
        flexDirection: 'row', 
        marginLeft: 20, 
        marginTop: 10, 
        gap: 10
    },
    cont35: {
        flexDirection: 'row',
        gap: 10
    },
    iconSet: {
        marginTop: 10,
        padding: 10, 
        backgroundColor: '#0A8ED9', 
        borderRadius: 10, 
        marginLeft: 5,
    }
});
 
export default SeeMoreRekomendasi;