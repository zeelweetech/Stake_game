import { jwtDecode } from "jwt-decode";

// set cookie
export function setCookie(name, value, hours) {
  const now = new Date();
  const expirationDate = new Date(now.getTime() + hours * 60 * 60 * 1000);

  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

//remove cookie
export function removeCookie(name) {
  const expirationDate = new Date();

  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${name}=; ${expires}; path=/`;
}

// Token Decode
export const decodedToken = () => {
  const token = localStorage.getItem("token");
  if (token && typeof token === "string") {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  } else {
    return null;
  }
};

//shuffle array component
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//get rendom number
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
