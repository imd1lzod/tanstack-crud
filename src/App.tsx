import {Route, Routes} from "react-router"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/users" element={<Users></Users>}></Route>
    <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
  </Routes>
  )
}

export default App