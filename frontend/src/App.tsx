import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import MainLayout from "./pages/MainLayout";
import CreateBlog from "./pages/CreateBlog";
import { ProtectedRoute } from "./utils/ProtectedRoute.tsx";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without layout */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        {/* other  */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center text-xl font-medium text-gray-500">
              404 Not Found
            </div>
          }
        />
        {/* All routes under MainLayout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<Blog />} />

          <Route path="publish" element={<CreateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
