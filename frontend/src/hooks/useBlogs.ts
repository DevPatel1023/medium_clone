import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${backend_url}/api/v1/blog/blogs`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return { loading, blogs };
};
