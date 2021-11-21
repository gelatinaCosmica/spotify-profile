import Sidebar from "../components/Sidebar"

function LoginForm() {
  return (
    <div className="bg-sp-black flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center space-y-6 text-white">
        <h1 className="font-bold text-2xl">Spotify Profile</h1>
        <button className="bg-sp-green hover:bg-sp-active-green px-8 py-3 rounded-full text-white font-bold">LOG IN TO SPOTIFY</button>
      </div>
    </div>
  )
}

export default LoginForm