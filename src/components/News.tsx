import data from "../data/data";

const News = () => {
  const handleReadMoreClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    console.log("Read More:", event.currentTarget);
  };

  return (
    <section className="news">
      <h2>All the latest from AEG</h2>
      <section className="news-container">
        {data.news.map((item, index) => (
          <article key={index}>
            <img src={item.image1} alt={item.title} />
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <a
              href="#"
              className="read-more"
              onClick={(event) => handleReadMoreClick(event, index)}
            >
              Read More
            </a>
          </article>
        ))}
      </section>
    </section>
  );
};

export default News;
