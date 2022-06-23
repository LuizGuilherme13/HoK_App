import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#E4E4E7",
  },

  text: {
    color: "#1e293b",
    padding: 10,
    fontSize: 20,
    marginBottom: 25,
    borderRadius: 10,
    borderBottomWidth: 10,
  },

  containerScroll: {
    width: 230,
    height: 250,
    //padding: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 3,
    //backgroundColor: "yellow",
  },

  contentContainer: {
    flex: 1,
    //backgroundColor: "red",
  },

  containerItem: {
    width: 300,
    height: 90,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "red",
  },

  item: {
    width: 90,
    height: 90,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    //backgroundColor: "#1e293b",
  },

  containerSubItem: {
    width: 250,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "red",
  },

  subItem: {
    width: 75,
    height: 80,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    //backgroundColor: "#1e293b",
  },
});
