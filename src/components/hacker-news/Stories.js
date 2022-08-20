import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading: loading, hits, removeStory } = useGlobalContext();

  if (loading) {
    return <h1 className="loading"></h1>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} |</span> {num_comments}{" "}
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noreferre"
              >
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
