import axios from "axios";

/**
 * LOGIN
 */
export async function userLogin({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/user/login`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

console.log("process.env.REACT_APP_LOCAL_URL", process.env.REACT_APP_LOCAL_URL);
