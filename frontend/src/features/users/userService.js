import axios from "axios";

const API_URL = "/api/people/user/";

// Get  all projects
const getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "list", config);

  return response.data;
};


const userService = {
  //createGoal,
  getAllUsers,
  //deleteGoal,
};

export default userService;
