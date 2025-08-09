import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  createdAt : string ;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      setLoading(false);
      return;
    }
    axios
      .get(`${backend_url}/api/v1/blog/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return { loading, blogs };
};
