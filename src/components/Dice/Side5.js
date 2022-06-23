import { StyleSheet, View } from "react-native";

export default function Side5() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.dice}>
        <View
          style={{
            flex: 1,
            width: 87,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>

        <View
          style={{
            flex: 1,
            width: 87,
            padding: 5,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={styles.dot}></View>
        </View>

        <View
          style={{
            flex: 1,
            width: 87,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
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
    justifyContent: "center",
    backgroundColor: "white",
  },

  dot: {
    backgroundColor: "black",
    height: 20,
    width: 20,
    borderRadius: 50,
  },
});
