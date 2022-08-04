import axios from 'axios'

const API_URL = '/api/projects/project/'


// Get  all projects
const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'list', config)

  return response.data
}


  


const projectService = {
  //createGoal,
  getProjects,
  //getProject
  //deleteGoal,
}

export default projectService