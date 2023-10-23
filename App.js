import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", key: 1 },
    { name: "yoshi", key: 2 },
    { name: "mario", key: 3 },
    { name: "luigi", key: 4 },
    { name: "peach", key: 5 },
    { name: "toad", key: 6 },
    { name: "bowser", key: 7 },
    { name: "aaron", key: 8 },
    { name: "specter", key: 9 },
    { name: "lit", key: 10 },
  ]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
