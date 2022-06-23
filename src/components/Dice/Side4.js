import { StyleSheet, View } from "react-native";

export default function Side4() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        //
      }}
    >
      <View style={styles.dice}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
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
    flexWrap: "wrap",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
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
