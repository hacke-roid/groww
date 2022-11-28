import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import MainScreen from "./src/screen/ExploreSreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Groww",
      headerTitleAlign: 'center',
    },
  }
)

export default createAppContainer(navigator);