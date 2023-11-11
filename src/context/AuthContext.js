import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "signin",
      payload: token,
    });
    navigate("mainFlow", { screen: "TrackList" });
  } else {
    navigate("loginFlow", { screen: "Signup" });
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
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
        type: "signin",
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

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message(somehow)
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("Token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow", { screen: "TrackList" });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      });
      console.log(err);
    }
  };

const signout = (dispatch) => {
  return () => {
    // Somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
