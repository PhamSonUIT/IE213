import apiClient from "./apiClient";

export const signUp = async (payload) => { // payload: email, pass_word, full_name
    try {
        console.log("payload register: ", payload);
        const response = await apiClient.post("/auth/signUp", payload);
        console.log("response register: ", response.data);
        return response;
    } catch (error) {
        throw error;
    }
}