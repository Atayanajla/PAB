import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Image, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from '@expo/vector-icons';

export default function Halaman5 () {
    return (
        <ScrollView>
            <View style={styles.container}>
              
              <View style={styles.cont35}>
                  <View style={styles.container3}>
                      <TextInput style={styles.input} placeholder="Search..." />
                      <Ionicons name="search" size={24} color="black" style={styles.icon2} />
                  </View>
              </View>

                <View style={styles.container7}>
                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
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
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
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

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>React js dalam 30 hari</Text>
                            <Text style={styles.Text3}>Rp 199.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>30 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>6 Quiz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>Python Programming Fundamentals</Text>
                            <Text style={styles.Text3}>Rp 120.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>45 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>3 Quiz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>Digital Marketing Mastery</Text>
                            <Text style={styles.Text3}>Rp 150.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>75 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>5 Quiz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>Machine Learning Basics</Text>
                            <Text style={styles.Text3}>Rp 200.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>90 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>6 Quiz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={styles.imageItem2}>
                            <Image source={require("../assets/gambar2.jpg")} style={styles.image2} />
                        </View>
                        <View style={styles.ket}>
                            <Text style={styles.Text2}>Graphic Design Essentials</Text>
                            <Text style={styles.Text3}>Rp 80.000 / paket</Text>
                            <View style={styles.ket2}>
                                <FontAwesome name="bed" size={24} color="#aeaeae" />
                                <Text>50 Video</Text>
                                <FontAwesome name="bathtub" size={24} color="#aeaeae" />
                                <Text>3 Quiz</Text>
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
