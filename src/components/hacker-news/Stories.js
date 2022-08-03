import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading: loading, hits, removeStory } = useGlobalContext();

  if (loading) {
    return <h1 className="loading"></h1>;
  }
  return <div>Stories</div>;
};

export default Stories;