import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../../config";

interface Blog {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
}

export const useGetBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      setLoading(false);
      return;
    }

    axios
      .get(`${backend_url}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (response.data) {
          setBlog(response.data);
        } else {
          console.error("No data in response");
        }
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Backend error response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error during request:", error.message);
        }
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
};
