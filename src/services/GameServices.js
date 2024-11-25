import axios from "axios";

export async function getAllGames() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/get`,
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

export async function getAllBets() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/bets/get`,
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

export async function getMyBets() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/bets/get/2`,
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

export async function getBigWins() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/getTopBets/13`,
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
