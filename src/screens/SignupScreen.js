import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "@rneui/themed";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button title="Sign Up" onPress={() => signup({ email, password })} />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  errorMessageStyle: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SignupScreen;
