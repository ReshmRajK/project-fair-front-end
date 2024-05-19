import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


//register api-called by component Auth
export const registerApi = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

//login api-called by component Auth
export const loginApi = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, reqBody)
}

//add project api-called by component Add
export const addProjectApi = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}

//get all project api-called by component Projects
export const getAllProjectsApi = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`, "", reqHeader)
}

//get user project api-called by component Dashboard
export const getUserProjectsApi = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-projects`, "", reqHeader)
}

//get home project api-called by component Home
export const getHomeProjectsApi = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-projects`, {})
}

//edit project api-called by component Edit 
export const editProjectsApi = async (projectId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-project/${projectId}`, reqBody, reqHeader)
}

//delete project api-called by component View 
export const removeProjectsApi = async (projectId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/delete-project/${projectId}`, {}, reqHeader)
}

//edit user api-called by component Profile 
export const updateProfileApi = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-user`, reqBody, reqHeader)
}