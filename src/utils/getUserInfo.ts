import { jwtDecode } from "jwt-decode";
interface UserInfo {
  name: string;
  isHR: boolean;
  // Add any other properties you expect to be present in the user object
}

const getUserInfo = (): UserInfo | null => {
  const token = localStorage.getItem('token');
  try {
    //@ts-ignore
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};

export default getUserInfo;

