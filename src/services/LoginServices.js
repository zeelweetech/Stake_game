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

/**
 * REGISTER
 */
export async function userRegister({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/user/add`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * WALLET
 */
export async function getWallet({ id: id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/wallet/get/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * UPDATE WALLET
 */
export async function updateWallet({ userId: userId }) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_LOCAL_URL}/wallet/update/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMedalsProgress({ userId: userId }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/medals/progress/get/${userId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
