import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Row = ({ target, row }) => {
  //   const { target, row } = props;
  target = target.toUpperCase();
  row = row.toUpperCase();
  console.log("props");
  console.log(target);
  console.log(row);
  console.log("###################");
  let rowView = [];

  for (let i = 0; i < target.length; i++) {
    // console.log(row[i]);
    if (row[i] === target[i]) {
      rowView.push(
        <Text style={styles.txtGreen} key={i}>
          {row[i]}
        </Text>
      );
    } else if (target.includes(row[i])) {
      rowView.push(
        <Text style={styles.txtYellow} key={i}>
          {row[i]}
        </Text>
      );
    } else {
      rowView.push(
        <Text style={styles.txtGray} key={i}>
          {row[i]}
        </Text>
      );
    }
  }

  return (
    <View
      style={{
        // height: 80,
        // width: "90%",
        // backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        // alignContent: "center",
        alignItems: "center",
        // marginTop: 5,
        marginBottom: 10,
        // paddingLeft: 5,
        // paddingRight: 5,
      }}
    >
      {/* <Text style={styles.txtGray}>C</Text>
      <Text style={styles.txtGreen}>H</Text>
      <Text style={styles.txtYellow}>A</Text>
      <Text style={styles.txtGray}>I</Text>
      <Text style={styles.txtGray}>N</Text> */}
      {rowView}
    </View>
  );
};

const styles = StyleSheet.create({
  txtGray: {
    height: 65,
    width: 65,
    fontSize: 55,
    backgroundColor: "gray",
    // borderWidth: 0.9,
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center",
    margin: 1.5,
  },
  txtGreen: {
    height: 65,
    width: 65,
    fontSize: 55,
    backgroundColor: "#95CD41",
    // borderWidth: 0.9,
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center",
    margin: 1.5,
  },
  txtYellow: {
    height: 65,
    width: 65,
    fontSize: 55,
    backgroundColor: "#F6D860",
    // borderWidth: 0.9,
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center",
    margin: 1.5,
  },
});

export default Row;
