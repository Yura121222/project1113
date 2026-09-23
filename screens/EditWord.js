import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants";

function EditWord({ route, navigation }) {
  const [wordData, setWordData] = useState(route.params?.wordData ?? {});

  useEffect(() => {
    setWordData(route.params?.wordData ?? {});
  }, [route.params?.wordData]);

  function updateField(field, value) {
    setWordData((previous) => ({ ...previous, [field]: value }));
  }

  function onSave() {
    navigation.navigate("AllWords", { wordData });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{wordData.word}</Text>
      <Text style={styles.label}>Phonetics</Text>
      <TextInput
        style={styles.input}
        value={wordData.phonetics ?? ""}
        onChangeText={(value) => updateField("phonetics", value)}
      />
      <Text style={styles.label}>Part of speech</Text>
      <TextInput
        style={styles.input}
        value={wordData.partOfSpeech ?? ""}
        onChangeText={(value) => updateField("partOfSpeech", value)}
      />
      <Text style={styles.label}>Meaning</Text>
      <TextInput
        style={[styles.input, styles.meaningInput]}
        value={wordData.meaning ?? ""}
        onChangeText={(value) => updateField("meaning", value)}
        multiline
      />
      <Pressable style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
  word: {
    color: COLORS.black,
    fontSize: 32,
    marginBottom: 20,
  },
  label: {
    color: COLORS.grey600,
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderColor: COLORS.primary200,
    borderRadius: 5,
    borderWidth: 1,
    color: COLORS.black,
    fontSize: 18,
    marginBottom: 14,
    padding: 10,
  },
  meaningInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.primary900,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 24,
  },
});

export default EditWord;
