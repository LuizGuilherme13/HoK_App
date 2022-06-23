import { StyleSheet, View } from "react-native";

export default function Side3() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.dice}>
        <View style={[styles.dot, { marginLeft: 55, marginTop: 20 }]}></View>
        <View style={[styles.dot, { marginTop: 2 }]}></View>
        <View
          style={[styles.dot, { marginRight: 55, marginBottom: 15 }]}
        ></View>
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
    //margin: 10,
  },
});
