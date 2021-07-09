import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, []);
  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs !"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
