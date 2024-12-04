
//2factPassword 

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
        // console.log('Response:', response.data);
        return response.data;

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}


// Forgot Password

export async function forgotPassword({body: body}) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_LOCAL_URL}/user/forgot-password`,
            body
        )
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Reset Password

export async function resetPassword({body: body}) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_LOCAL_URL}/user/reset-password`,
            body
        )
        return response.data;
    } catch (error) {
        throw error;
    }
}