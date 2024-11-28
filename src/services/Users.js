// // old/new/forgoot password
 
// export async function twoFactPassword({ userId: userId }) {
//   try {
//     const response = await axios.put(
//       `${process.env.REACT_APP_LOCAL_URL}/wallet/update/${userId}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// API call to update password

import axios from "axios";
export async function twoFactPassword({ userId, values }) {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_LOCAL_URL}/user/forgotPassword/${userId}`,
            values,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            }
        );
        // return response.data;
        console.log('Response:', response.data);
        return response.data;

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}
