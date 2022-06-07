import React                                  from "react";
import { View }                               from "react-native-web";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MyButton() {
    const [count, setCount] = React.useState(0);

    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity style={styles.button2} >
                <Text style={{
                    color: "white",
                    fontSize: 20,
                    alignSelf: "center",}}
                >-
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={{
                    color: "white",
                    fontSize: 20,
                    alignSelf: "center",}}
                >+
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button2: {
        width           : 30,
        height          : 30,
        borderRadius    : 10,
        backgroundColor : "#00BFFF",
    },
});
