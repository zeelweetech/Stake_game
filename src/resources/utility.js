import { jwtDecode } from "jwt-decode";

export function setCookie(name, value, hours) {
  const now = new Date();
  const expirationDate = new Date(now.getTime() + hours * 60 * 60 * 1000);

  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function removeCookie(name) {
  const expirationDate = new Date(); // A past date

  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${name}=; ${expires}; path=/`;
}

// Token Decode
export const decodedToken = () => {
  const token = localStorage.getItem("token");

  // Check if the token exists and is a string
  if (token && typeof token === "string") {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode token:", error);
      // Handle the error, e.g., return null or an empty object
      return null;
    }
  } else {
    console.error("Invalid token or token not found");
    return null;
  }
};
