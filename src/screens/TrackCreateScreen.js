import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";

import "../_mockLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused, addLocation);

  useEffect(() => {
    if (isFocused) {
      // Perform any additional logic when the screen is focused
    }
  }, [isFocused]);

  console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
