// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { words } from "./words";
import Row from "./src/components/Row";
import react from "react";
// import { TextInput } from "react-native-web";

export default function App() {
  const temp = words[Math.floor(Math.random() * words.length)].toUpperCase();

  const [targetWord, settargetWord] = React.useState(temp);
  const [text, setText] = React.useState("");
  const [guess, setGuess] = React.useState(["", "", "", "", "", "", ""]);
  const [cnt, setCnt] = React.useState(0);

  // var guesses = ["", "", "", "", "", ""];
  // var gCnt = 0;

  const pressHandler = (text) => {
    console.log("pressing button");
    console.log(text);
    console.log(cnt);
    // console.log(guesses);
    console.log(text.length);
    if (text.length === 5) {
      console.log("yes this is i was waiting for");
      // guess[gCnt] = text;
      setGuess((...t) => (t[cnt] = text));
      setCnt((...v) => v + 1);
    }
  };

  const clearFunc = (val) => {
    setText("");
  };
  // console.log(targetWord);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 50,
          position: "relative",
          margin: 20,
          // top: StatusBar.currentHeight + 10,
        }}
      >
        WORDLE
      </Text>
      <View
        style={{
          position: "relative",
          top: 0,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row target={targetWord} row={guess[0]}></Row>
        <Row target={targetWord} row={guess[1]}></Row>
        <Row target={targetWord} row={guess[2]}></Row>
        <Row target={targetWord} row={guess[3]}></Row>
        <Row target={targetWord} row={guess[4]}></Row>
        <Row target={targetWord} row={guess[5]}></Row>
      </View>
      <TextInput
        placeholder="input word"
        style={{
          position: "relative",
          top: -5,
          height: 70,
          width: "60%",
          marginTop: 20,
          backgroundColor: "#eef6f5",
          textAlignVertical: "center",
          textAlign: "center",
          fontSize: 20,
          borderRadius: 40,
          borderWidth: 0.2,
        }}
        value={text}
        onChangeText={(value) => setText(value)}
      ></TextInput>
      <TouchableOpacity>
        <Text
          style={{
            height: 70,
            width: 150,
            backgroundColor: "#A2CDCD",
            textAlign: "center",
            textAlignVertical: "center",
            position: "relative",
            top: 30,
            borderRadius: 50,
            fontSize: 15,
          }}
          onPress={() => {
            pressHandler(text), clearFunc(text);
          }}
        >
          ENTER
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FAEDF0",
  },
});
