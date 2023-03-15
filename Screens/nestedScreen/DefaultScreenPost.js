import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const DefaultScreenPost = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.photo }}
              style={{ marginHorizontal: 10, height: 200, width: 250 }}
            />
          </View>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={{ marginRight: 5, marginTop: 16 }}>go to map{""}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Comments")}
      >
        <Text style={{ marginRight: 5, marginTop: 16 }}>
          go to comments{""}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DefaultScreenPost;
