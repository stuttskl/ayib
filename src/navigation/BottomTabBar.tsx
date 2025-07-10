import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { DetailsScreen } from "../screens/Details";
import { LibraryScreen } from "../screens/Library";
import { theme } from "../ui-kit/theme";

const Tab = createBottomTabNavigator();

export function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar.background,
        },
        tabBarInactiveTintColor: theme.colors.tabBar.inactive,
        tabBarActiveTintColor: theme.colors.tabBar.active,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
