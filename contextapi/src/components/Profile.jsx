import { useContext } from "react";
import UserContext from "../context/UserContext.js";

export const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>WelCome {user}</div>;
};
