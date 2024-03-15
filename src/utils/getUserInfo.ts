import { jwtDecode } from "jwt-decode";

const getUserInfo = () => {
  const token = localStorage.getItem('token');
  try {
    //@ts-ignore
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};

export default getUserInfo;

