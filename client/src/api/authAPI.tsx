import { UserData } from "../interfaces/UserData";
import { UserLogin } from "../interfaces/UserLogin";

import axios from 'axios';


axios.defaults.withCredentials = true;

const login = async (userInfo: UserLogin) => {
  try {
    const res = await axios.post('/auth/login', userInfo);
    return res.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
  // TODO: make a POST request to the login route '/auth/login' with the userInfo

  // TODO: return the user object from the response

};

const register = async (userInfo: UserLogin) => {
  try {
    const res = await axios.post('/auth/register', userInfo);
    
    return res.data;
  } catch (error: any) {
  
    console.error("Registration failed:", error);
    throw error;
  }
}

export const getUser = async (): Promise<UserData | null> => {

  try {
    const res = await axios.get('/auth/user');
    console.log("User data fetched:", res.data);
    return res.data as UserData;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
  // TODO: Make a GET request to '/auth/user' to get the logged in user's data

  // TODO: return the user object from the response


export const logOut = async () => {
  try {
    await axios.get('/auth/logout');
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
  // TODO: Make a GET request to '/auth/logout' to delete the user's cookie and log them out



export { login, register };
