import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container2: {
    width: 100,
    alignSelf: "center",
    marginLeft: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  item: {
    padding: 5,
    //marginLeft: 10,
    borderRadius: 30,
    marginBottom: 15,
    flexDirection: "row",
    backgroundColor:'#9898a2',
  },

  input: {
    width: 40,
    height: 30,
    padding: 1,
    textAlign: "center",
    backgroundColor:"#FFFFFF", 
    fontSize: 20,
    marginLeft: 30,
    borderWidth: 1,
  },
  button2: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#1e293b",
  },

  textButton: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
});
