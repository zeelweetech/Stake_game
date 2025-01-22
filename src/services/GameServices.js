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

export async function searchGames({game: game}) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/get?search=${game}`,
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

export async function getAllBets({
  page: page, pageSize: pageSize
}) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/bets/get?page=${page}&limit=${pageSize}`,
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

export async function getMyBets({
  userId: userId,
  page: page,
  pageSize: pageSize
}) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/bets/get/${userId}?page=${page}&limit=${pageSize}`,
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

export async function getBigWins({
  id: id
}) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/game/getTopBets/${id}`,
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
