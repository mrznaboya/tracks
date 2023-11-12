import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/base";

import Spacer from "../components/Spacer";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Spacer>
        <Button
          title="Go to Track Detail"
          onPress={() => navigation.navigate("TrackDetail")}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
