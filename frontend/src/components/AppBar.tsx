import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import { SquarePen } from "lucide-react";

const AppBar = () => {
  return (
    <div className="inline-flex  flex-row w-full mt-4 px-4 items-center justify-between space-x-5 border-b border-gray-400 p">
      {/* left-side */}
      <div className="flex justify-center gap-5">
        <h1 className="font-medium text-2xl">Medium</h1>
        <SearchBar />
      </div>

      {/* right side */}
      <div className="flex justify-center gap-5">
        <SquarePen />
        <Avatar name="dev" />
      </div>
    </div>
  );
};

export default AppBar;
