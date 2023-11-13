import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem } from "@rneui/base";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = () => {
  const navigation = useNavigation();
  const { state, fetchTracks } = useContext(TrackContext);

  // console.log(state);
  // Use useFocusEffect instead of NavigationEvents for version 6
  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {/* <NavigationEvents onWillFocus={fetchTracks} /> */}
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Spacer>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <ListItem chevron>
                  <Text>{item.name}</Text>
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
