import { useNavigate } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const UserAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
      if (!token || token === "undefined") {
        toast.error("You're not logged in.");
        return navigate("/login");
      }
    }, [token]);
    return children;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export default UserAuth;
