import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Context} from "../globalStore/blogsData";
import { EvilIcons } from "@expo/vector-icons";

const showBlog = ({ navigation }) => {
  const { state , getBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(()=>{
    getBlogPost();

    const Listner = navigation.addListener('didFocus', () => {
    getBlogPost();
    })
    return () => {
        Listner.remove();
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{blogPost.title}</Text>
      <Text style={styles.body}>{blogPost.content}</Text>
    </View>
  );
};
showBlog.navigationOptions = ({navigation}) => {
return {
    title: 'Details',
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('EditBlog', {id:navigation.getParam('id')})}>
          <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
    )
      };
}
export default showBlog;

const styles = StyleSheet.create({
    heading: {
        textAlign:'center',
      padding:8,
      backgroundColor: "#fff",
      width: "100%",
      marginTop: 20,
      marginHorizontal: 15,
      fontSize: 22,
      borderRadius: 10,
      fontWeight:"600"
    },
      body: {
     padding:10,
      backgroundColor: "#fff",
      width: "100%",
      marginTop: 20,
      marginHorizontal: 15,
      fontSize: 16,
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
      flex: 1,
      alignItems: "center",
    },
  });