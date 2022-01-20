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
  ScrollView,
} from "react-native";
import { words } from "./words";
import Row from "./src/components/Row";
import react from "react";
// import { TextInput } from "react-native-web";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      targetWord: words[Math.floor(Math.random() * words.length)].toUpperCase(),
      guess: ["     ", "     ", "     ", "     ", "     ", "     "],
      cnt: 0,
      text: "",
    };
  }

  clearFunc(e) {
    this.setState({ text: "" });
  }

  // handleClick(e) {
  //   let test = this.input;
  //   const text = test._lastNativeText.trim();
  //   this.props.onAddClick(text);

  // }

  pressHandler() {
    console.log("button pressed");
    console.log(this.state.text);
    if (this.state.text.length === 5) {
      if (
        this.state.text.toLowerCase() === this.state.targetWord.toLowerCase()
      ) {
        alert("Congratulations !!!\n You have guessed the word correctly.");
      }
      var ind = this.state.cnt;
      var temp = this.state.guess.map((i) => i);
      console.log(temp);
      temp[ind] = this.state.text;
      this.setState({ guess: temp });
      this.setState({ cnt: this.state.cnt + 1 });
      console.log(this.state.guess);

      // this.setState({ text: "" });
      // console.log("inside if");
    } else {
      alert("please enter a 5 letter word");
    }

    // this.setState({cnt: cnt+1})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "blue",
            // width: "100%",
            // height: "100%",
            flexGrow: 1,
            position: "relative",
            top: 20,
          }}
        >
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
            <Row target={this.state.targetWord} row={this.state.guess[0]}></Row>
            <Row target={this.state.targetWord} row={this.state.guess[1]}></Row>
            <Row target={this.state.targetWord} row={this.state.guess[2]}></Row>
            <Row target={this.state.targetWord} row={this.state.guess[3]}></Row>
            <Row target={this.state.targetWord} row={this.state.guess[4]}></Row>
            <Row target={this.state.targetWord} row={this.state.guess[5]}></Row>
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
            value={this.text}
            onChangeText={(text) => this.setState({ text })}
          ></TextInput>
          <TouchableOpacity>
            <Text
              style={{
                height: 60,
                width: 130,
                backgroundColor: "#A2CDCD",
                textAlign: "center",
                textAlignVertical: "center",
                position: "relative",
                top: 30,
                borderRadius: 50,
                fontSize: 15,
                marginBottom: 50,
              }}
              onPress={(e) => {
                this.pressHandler(), this.clearFunc(e);
              }}
            >
              ENTER
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FAEDF0",
  },
});

export default App;
