import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationActions } from "react-navigation";
import { Context } from "../globalStore/blogsData";

const createBlog = ({ navigation }) => {
  const { state, addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Blog Your</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.titleStyle}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.contentStyle}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <TouchableOpacity
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Main");
          });
        }}
      >
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
createBlog.navigationOptions = ({navigation}) => {
    return {
        title: 'Create ',
       
      };
    }

export default createBlog;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    padding: 8,
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 15,
    fontSize: 22,
    borderRadius: 10,
    fontWeight: "600",
  },
  titleStyle: {
    padding: 8,
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 18,
    borderRadius: 10,
  },
  contentStyle: {
    padding: 8,
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: 80,
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 18,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  save: {
    padding: 6,
    fontSize: 16,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
  },
});
