import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  // Use useFocusEffect to perform actions when the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={styles.containerStyle}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink name="Signin" text="Already have an account? Sign in instead!" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
