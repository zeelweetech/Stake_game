import axios from "axios";

export async function getRandomData() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/random-users`,
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

export async function getRandomFiveData() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/LastFiveCrashPoints`,
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

export async function getGameRandomFiveData({ id: id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/LastFiveCrashPoints/${id}`,
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
