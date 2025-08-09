import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import { SquarePen } from "lucide-react";

const AppBar = () => {
  return (
    <div className="flex w-full px-4 py-2 items-center justify-between border-b border-gray-400 whitespace-nowrap">
      {/* Left-side: Title + Search */}
      <div className="flex items-center gap-5">
        <Link to="/">
        <h1 className="font-medium text-2xl">Medium</h1>
        </Link>
        <SearchBar />
      </div>

      {/* Right-side: Icon + Avatar */}
      <div className="flex items-center gap-5">
        <SquarePen />
        <Avatar name="dev" />
      </div>
    </div>
  );
};

export default AppBar;
