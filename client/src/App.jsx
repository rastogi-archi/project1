import { Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./redux/authSlice"
import { Loader } from "lucide-react"
import CheckAuth from "./common/CheckAuth"
import Home from "./pages/home/Home"
import Profile from "./components/Profile"
import Message from "./components/Message"
import Connections from "./components/Connections"
import Query from "./pages/query/Query"
import UnAuth from "./common/UnAuth"

function App() {

  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader className="animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} >
          <Route path="profile" element={<Profile />} />
          <Route path="message" element={<Message />} />
          <Route path="connections" element={<Connections />} />
          <Route path="query" element={<Query />} />
        </Route>
        <Route path="*" element={<UnAuth />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
