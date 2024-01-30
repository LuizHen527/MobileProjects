//componente person

import { StyleSheet, Text, View } from "react-native";

//props: name, age
const Person = ({name, age}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Nome: {name}</Text>
            <Text style={styles.txt}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        gap: 30,
    },

    txt: {
        fontFamily: 'SingleDay_400Regular',
        fontSize: 70,
        color: 'white'
    }
})

export default Person;