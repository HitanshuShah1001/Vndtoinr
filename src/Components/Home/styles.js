import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "90%",
    borderRadius: 18,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 15,
    marginTop: 15,
  },

  container: { flex: 1, alignItems: "center" },
  buttonContainer: {
    width: "50%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  text: {
    marginTop: 10,
  },
});
