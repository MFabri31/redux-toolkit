import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../redux/postsSlice";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();

        console.log(data);

        if (Array.isArray(data)) {
          dispatch(getPosts(data));
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [dispatch]);

  const postsList = posts?.slice(0, 10).map((post) => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </article>
  ));

  return (
    <>
      <h3>Posts</h3>
      {postsList?.length > 0 ? postsList : <div>Without posts!</div>}
    </>
  );
};

export default PostsList;
