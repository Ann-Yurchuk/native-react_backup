import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
