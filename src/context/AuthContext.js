import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

// Using compacted syntax
// Example:
// const add = (a, b) => {
// return a + b;
// };

// We could:
// const add = (a, b) => a + b;
const signup =
  (dispatch) =>
  async ({ email, password, navigation }) => {
    // Make api request to sign up with that email and password
    // If we sign up, modify our state, and say that we are
    // authenticated
    // If signing up fails, we probably need to reflect an error message
    // somewhere
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      // await AsyncStorage.getItem('token');

      dispatch({
        type: "signup",
        payload: response.data.token,
      });

      navigate("mainFlow", { screen: "TrackList" });
      // Navigate to mainFlow/trackList
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
      console.log(err);
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message(somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // Somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
