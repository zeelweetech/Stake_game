import { auth, googleProvider, facebookProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import axios from "axios"; // To send the API request
import toast from "react-hot-toast";
import { setCookie } from "../resources/utility";

export async function handleGoogleLogin() {
  try {
    // Firebase authentication with Google
    const result = await signInWithPopup(auth, googleProvider);
    console.log("result", result);

    // Firebase UID from the authenticated user
    const firebaseUid = { uid: result.user.uid };
    console.log("Google Login Success - Firebase UID:", firebaseUid);

    // Send the Firebase UID to your API
    await sendDataToApi(firebaseUid);

    return result.user;
  } catch (error) {
    console.error("Google Login Failed:", error);
    throw error;
  }
}

export async function handleFacebookLogin() {
  try {
    // Firebase authentication with Facebook
    const result = await signInWithPopup(auth, facebookProvider);

    // Firebase UID from the authenticated user
    const firebaseUid = { uid: result.user.uid };
    console.log("Facebook Login Success - Firebase UID:", firebaseUid);

    // Send the Firebase UID to your API
    await sendDataToApi(firebaseUid);

    return result.user;
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log(
        "Popup was closed by the user before completing the sign-in process."
      );
    } else {
      console.error("Facebook Login Failed:", error);
      toast.error(error.message || "Facebook login failed!");
    }
    console.error("Facebook Login Failed:", error);
    // throw error;
  }
}

export async function sendDataToApi(firebaseUid) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/user/firebaseLogin`,
      firebaseUid // Sending the Firebase UID to your API
    );
    // console.log("Data sent to API:", response?.data?.token);
    setCookie("token", response?.data?.token, 24);
    localStorage.setItem("token", response?.data?.token);
    toast.success(response?.data?.message);
    window.location.reload();
  } catch (error) {
    console.error("Failed to send data to API:", error);
  }
}
