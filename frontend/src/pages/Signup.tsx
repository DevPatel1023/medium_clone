import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signup = () => {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
      <Auth type="signup" />
      </div>
      <div className="hidden md:flex h-full">
      <Quote />
      </div>
    </div>
  )
}

export default Signup
