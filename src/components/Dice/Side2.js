import { StyleSheet, View } from "react-native";

export default function Side2() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.dice}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    margin: 10,
  },
});
