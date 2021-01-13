import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context } from "../globalStore/blogsData";

const EditBlog = ({ navigation }) => {
  const { state, updateBlogPost } = useContext(Context);
  const id=navigation.getParam('id')
  const blogPost = state.find((blogPost) => blogPost.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  if(!state) {
      return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Blog Your</Text>
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
          updateBlogPost(id, title, content, () => {
            navigation.pop();
          });
        }}
      >
        <Text style={styles.save}>Update Post</Text>
      </TouchableOpacity>
    </View>
  );
};
EditBlog.navigationOptions = ({navigation}) => {
    return {
        title: 'Edit',
       
      };
    }
export default EditBlog;

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
    padding:8,
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 18,
    borderRadius: 10,
  },
    padding:8,
    contentStyle: {
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
    padding:6,
    fontSize: 16,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
  },
});
