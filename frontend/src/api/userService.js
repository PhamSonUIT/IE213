import apiClient from "./apiClient";

export const getUser = async (req, res) => {
  try {
    const response = await apiClient.get("/users/get");
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
