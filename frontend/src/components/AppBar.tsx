import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

const AppBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserName(user.name);
      } catch (err) {
        console.error("Failed to parse user data", err);
      }
    }
  }, []);

  return (
    <div className="flex w-full px-4 py-2 items-center justify-between border-b border-gray-400 whitespace-nowrap">
      {/* Left-side: Title + Search */}
      <div className="flex items-center gap-5">
        <Link to="/blogs">
        <h1 className="font-medium text-2xl">Medium</h1>
        </Link>
        <SearchBar />
      </div>

      {/* Right-side: Icon + Avatar */}
      <div className="flex items-center gap-5">
        <Link to='/publish'>
        <SquarePen />
        </Link>
        <Avatar name={userName ?? "Anoynomous"} />
      </div>
    </div>
  );
};

export default AppBar;
