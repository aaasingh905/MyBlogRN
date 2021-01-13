import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../globalStore/blogsData";
import { Feather } from "@expo/vector-icons";

const MainScreen = ({navigation}) => {
  const { state,  deleteBlogPost ,getBlogPost } = useContext(Context);

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
    <View>
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ShowBlog', {id:item.id, title:item.title} )}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather
                    style={styles.icon}
                    name="trash"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

MainScreen.navigationOptions = ({navigation}) => {
    return {title: 'Blogs',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CreateBlog')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }
}

export default MainScreen;

const styles = StyleSheet.create({
  row: {
    borderColor: "grey",
    borderBottomWidth: 1,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 22,
  },
});
