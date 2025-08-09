import Avatar from "./Avatar";
import SearchBar from "./SearchBar"
import { SquarePen } from 'lucide-react';


const AppBar = () => {
  return (
    <div className="flex  flex-col space-x-5 border-b border-gray-400 p">
      {/* left-side */}
      <div className="left-5">
        <h1 className="font-medium text-2xl">
          Medium
        </h1>
        <SearchBar />
      </div>

      {/* right side */}
    <div>
<SquarePen />
<Avatar name="dev" />
    </div>
    </div>
  )
}

export default AppBar
