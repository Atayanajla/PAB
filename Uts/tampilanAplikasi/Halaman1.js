import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from '@expo/vector-icons';

export default function Halaman1({navigation}) {
    const Halaman2 = () => navigation.navigate('Halaman 2')
    const seeMorePopuler = () => navigation.navigate('All Populer')
    const seeMoreRekomendasi = () => navigation.navigate('All Rekomendasi')
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.container2}>
                    <Text>Kategori</Text>
                    <TouchableOpacity>
                        <Ionicons name="notifications" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.cont35}>
                    <View style={styles.container3}>
                        <TextInput style={styles.input} placeholder="Search..." />
                        <Ionicons name="search" size={24} color="black" style={styles.icon2} />
                    </View>
                    <View style={styles.iconSet}>
                        <Ionicons name="settings-outline" size={24} color="white" />
                    </View>
                </View>

                <View style={styles.container4}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
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
                            <Text>Laravel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>JavaScript</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>PHP</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.container5}>
                    <Text style={styles.TextLeft}>Populer</Text>
                    <TouchableOpacity style={styles.seeMoreButton} onPress={seeMorePopuler}>
                        <Text style={styles.ButtonText}>See More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container6}>
                    <ScrollView horizontal>
                        <View style={styles.imageContainer}>
                            <TouchableOpacity style={styles.imageItem} onPress={Halaman2}>
                                <Image source={require("../assets/gambar1.jpg")} style={styles.image} />
                                <View style={styles.merekContainer}>
                                    <Text style={styles.judul}>Laravel sebentar</Text>
                                    <Text style={styles.bawahJudul}>Khusus pemula</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.imageItem}>
                                <Image source={require("../assets/gambar2.jpg")} style={styles.image} />
                                <View style={styles.merekContainer}>
                                    <Text style={styles.judul}>Laravel sebentar</Text>
                                    <Text style={styles.bawahJudul}>Khusus pemula</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.container5}>
                    <Text style={styles.TextLeft}>Rekomendasi</Text>
                    <TouchableOpacity style={styles.seeMoreButton} onPress={seeMoreRekomendasi}>
                        <Text style={styles.ButtonText}>See More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container7}>
                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar1.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>Laravel dalam 20 hari</Text>
                            <Text style={styles.Text3}>free</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>60 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>4 Quiz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar1.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>React advance 30 hari</Text>
                            <Text style={styles.Text3}>Rp 200.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>60 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>4 Quiz</Text>
                            </View>
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
    // input: {

    // },
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
        backgroundColor: "#0a8ed9",
        padding: 15,
        borderRadius: 10,
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
    Text2: {
        marginLeft: 20,
    },
    Text3: {
        marginLeft: 20,
        marginTop: 5,
        color: "blue",
    },
    merekContainer: {
        marginTop: -80,
        padding: 25,
        paddingLeft: 10
    },
    judul: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 3
    },
    bawahJudul: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
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
