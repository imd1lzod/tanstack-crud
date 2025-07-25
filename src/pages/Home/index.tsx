import { Link } from "react-router"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/users'}>to users</Link>
    </div>
  )
}

export default Home