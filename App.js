import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./screens/MainScreen";
import ShowBlogScreen from "./screens/ShowBlog";
import EditBlogScreen from "./screens/EditBlog";
import CreateBlogScreen from "./screens/CreateBlog";
import { Provider } from "./globalStore/blogsData";

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    ShowBlog: ShowBlogScreen,
    CreateBlog: CreateBlogScreen,
    EditBlog: EditBlogScreen,
  },

  {
    initialRouteName: "Main",

    defaultNavigationOptions: {
      title: "Blog",
      headerStyle: {
        backgroundColor: "#18d67a",
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}
