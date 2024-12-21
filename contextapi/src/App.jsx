import UserContextProvider from "./context/UserContextProvider.jsx";
import { Login } from "./components/Login.jsx";
import { Profile } from "./components/Profile.jsx";

const App = () => {
  return (
    <UserContextProvider>
      <h2>Context Api Learning</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};
export default App;
