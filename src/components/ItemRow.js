import { Text, TouchableOpacity, View } from "react-native";
import { round } from "react-native-reanimated";

function ItemRow(props) {
  return (
    <View
      style={{
        flex: 1,
        height: 100,
        padding: 5,
        flexDirection: "row",
        backgroundColor: props.color,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "green",
        }}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
}

export default ItemRow;
