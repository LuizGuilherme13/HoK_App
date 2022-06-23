import { StyleSheet, View } from "react-native";

export default function Side6() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.dice}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
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
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },

  dot: {
    backgroundColor: "black",
    width: 20,
    height: 20,
    margin: 4,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 50,
  },
});
