import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  items: {
    height: 400,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#0188EA",
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
  },
  inputSection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submitButton: {
    marginTop: 50,
    backgroundColor: "#00DFA3",
    width: 174,
    height: 33,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#EDEDEB",
    fontSize: 20,
  },
  selectSection: {
    flexDirection: "row",
    marginRight: 5,
  },
  icon: {
    width: 36,
    height: 36,
  },
  dropIcon: {
    width: 14,
    height: 8,
  },
  iconSection: {
    backgroundColor: "#D9D9D9",
    width: 61,
    height: 61,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dropButtonFather: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
  },
  picker: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  option: {
    padding: 15,
  },
  optionText: {
    fontSize: 16,
  },
  firstInput: {
    marginRight: 21,
  },
});
