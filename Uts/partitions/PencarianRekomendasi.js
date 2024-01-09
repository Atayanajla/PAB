import { Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

const PencarianRekomendasi = ({styles, setRekomendasiCourse}) => {
    const handlePencarian = (namaCourse) => {
        console.log("Payload:", { search: namaCourse });
        axios.get(`https://4d40-36-72-248-148.ngrok-free.app/courses/search?search=${namaCourse}`)
        .then((getData) => {
            if (getData.status === 200) {
                setRekomendasiCourse(getData.data)
            }
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
                console.log("tidak ada course yang ditemukan")
                setRekomendasiCourse([])
            }
        })
    }
    return (
        <View style={styles.cont35}>
            <View style={styles.container3}>
                <TextInput style={styles.input} placeholder="Search..." 
                    onChangeText={handlePencarian}
                />
                <Ionicons
                    name="search"
                    size={24}
                    color="black"
                    style={styles.icon2}
                />
            </View>
            <View style={styles.iconSet}>
                <Ionicons name="settings-outline" size={24} color="white" />
            </View>
        </View>
    );
}

export default PencarianRekomendasi;