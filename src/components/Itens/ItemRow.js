import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";

const items = {
  item: {
    Sword: require("../../../assets/Itens/Sword.jpeg"),

    Shield: require("../../../assets/Itens/Shield.jpeg"),

    LifeGem: require("../../../assets/Itens/LifeGem.jpeg"),

    Pet: require("../../../assets/Itens/Pet.jpeg"),
  },
};

function ItemRow(props) {
  return (
    <View
      style={{
        flex: 1,
        height: 100,
        padding: 5,
        flexDirection: "row",
        backgroundColor: "#E4E4E7",
        borderWidth: 1,
        margin: 4,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
        }}
        onPress={() => props.equipItem(items.item[props.item])}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
}

export default ItemRow;
