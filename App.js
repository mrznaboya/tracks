import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => (
  <Stack.Navigator initialRouteName="Signup">
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);

const TrackListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackList" component={TrackListScreen} />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const MainFlow = () => (
  <Tab.Navigator>
    <Tab.Screen name="trackListFlow" component={TrackListStack} />
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="loginFlow" component={LoginFlow} />
          <Stack.Screen name="mainFlow" component={MainFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
