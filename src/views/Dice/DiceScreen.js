import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Side2 from "../../components/Dice/Side2";
import Side3 from "../../components/Dice/Side3";
import Side4 from "../../components/Dice/Side4";
import Side5 from "../../components/Dice/Side5";
import Side6 from "../../components/Dice/Side6";
//import PickerSelect from "react-native-picker-select";

export default function DiceScreen() {
  const [dice, setDice] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const windowWidth = Dimensions.get("window").width / 1.5;

  const faceSide = {
    side: {
      0: <View style={styles.dot1}></View>, //1
      1: <Side2 />, //2
      2: <Side3 />, //3
      3: <Side4 />, //4
      4: <Side5 />, //5
      5: <Side6 />, //6
    },
  };

  const placeholder = {
    label: "Select a sport...",
    value: null,
    color: "#9EA0A4",
  };

  return (
    <View style={styles.container}>
      {/* <PickerSelect
        style={{ placeholder: "AA" }}
        items={[
          { label: "TESTE", value: "eu" },
          { label: "TESTE 2", value: "meu" },
          { label: "TESTE 3", value: "seu" },
        ]}
      /> */}

      <View style={[styles.containerDice, { width: windowWidth }]}>
        <View style={styles.dice}>{faceSide.side[dice]}</View>
        <View style={styles.dice}>{faceSide.side[diceTwo]}</View>
      </View>

      <View>
        <Text style={styles.boxResult}>{dice + 1 + (diceTwo + 1)}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setDice(Math.floor(Math.random() * 6));
            setDiceTwo(Math.floor(Math.random() * 6));
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>ROLL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E4E4E7",
    justifyContent: "center",
  },

  containerDice: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxResult: {
    width: 50,
    height: 50,
    padding: 7,
    fontSize: 25,
    marginTop: 30,
    textAlign: "center",
    borderWidth: 2,
    marginBottom: 100,
    backgroundColor: "white",
  },

  dice: {
    height: 90,
    width: 90,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "white",
  },

  dot: {
    backgroundColor: "black",
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  dot1: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  button: {
    width: 150,
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: "#1e293b",
  },
});
