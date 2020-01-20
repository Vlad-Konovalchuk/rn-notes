import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput, FAB } from "react-native-paper";

function AddNotes({ navigation }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function onNoteSave() {
    navigation.state.params.addNote({ noteTitle, noteValue });
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Notes modal screeen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  title: {
    fontSize: 20
  }
});

export default AddNotes;
