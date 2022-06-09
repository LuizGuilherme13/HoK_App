import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles/attributeRowStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function AttributeRow(props) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.item}>
      <Icon name={props.name} size={props.size} color={props.color} />

      <Text style={styles.input}>{count}</Text>

      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.textButton}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
