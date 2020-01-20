import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput, FAB } from "react-native-paper";
import { Header } from "../components/Header";
function AddNotes({ navigation }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function onNoteSave() {
    navigation.state.params.addNote({ noteTitle, noteValue });
  }
  return (
    <>
      <Header title="Add a new note" />
      <IconButton
        icon="close"
        size={35}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          label="Add title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add note here"
          value={noteValue}
          mode="flat"
          onChangeText={setNoteValue}
          style={styles.text}
          multiline={true}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={!noteTitle}
          onPress={() => onNoteSave()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  iconButton: {
    backgroundColor: "rgba(46, 113, 102, 0.8)",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0
  }
});

export default AddNotes;
