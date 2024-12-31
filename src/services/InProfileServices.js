import axios from "axios"

export async function getStatisticsData({id: id}) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/user/statistics/${id}`,
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

// export default getStatisticsData