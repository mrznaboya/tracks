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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./navigationRef";
import { Provider as LocationProvider } from "./src/context/LocationContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signin"
      component={SigninScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const TrackListStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TrackList"
      component={TrackListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const MainFlow = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="trackListFlow"
      component={TrackListStack}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <NavigationContainer
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        >
          <Stack.Navigator initialRouteName="ResolveAuth">
            <Stack.Screen
              name="ResolveAuth"
              component={ResolveAuthScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="loginFlow"
              component={LoginFlow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="mainFlow"
              component={MainFlow}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </LocationProvider>
  );
};

export default App;
