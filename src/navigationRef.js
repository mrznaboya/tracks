import { useNavigation } from "@react-navigation/native";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (name, params) => {
  const navigation = useNavigation();
  navigation.navigate(name, params);
};
