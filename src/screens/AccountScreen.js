import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
