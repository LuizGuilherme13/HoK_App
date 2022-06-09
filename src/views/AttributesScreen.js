import React from "react";
import { ImageBackground } from "react-native";
import AttributeRow from "../components/AttributeRow";
import { styles } from "../../styles/attributeScreenStyle";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AttributesScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={styles.text}>ATRIBUTOS</Text>
      </View>

      <View style={{ marginTop: 60 }}>
        <AttributeRow name="heart" size={35} color="red" />
        <AttributeRow name="shield-half-full" size={35} />
        <AttributeRow name="sword" size={35} />
        <AttributeRow name="sword-cross" size={35} />
        <AttributeRow name="run-fast" size={35} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 20, color: "white" }}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}
