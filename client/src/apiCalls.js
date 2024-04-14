import axios from "axios";

//LOGIN Call
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

//LOGOUT Call
export const logoutCall = async () => {
  localStorage.setItem("user", null);
  window.location.reload();
};
