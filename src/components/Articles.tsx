import { useState } from "react";
import data from "../data/data";

const Articles = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { images, article, conclusion } = data;

  const handleImageClick = (
    imagesZoomed: string,
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    setSelectedImage(imagesZoomed);
    setModalVisible(true);

    console.log("Image url: ", imagesZoomed);
    console.log("Element: ", event.currentTarget);
  };
  const handleModalClick = () => {
    setModalVisible(false);
  };

  return (
    <section className="articles animate__fadeIn">
      <div className="articles-container">
        <div className="article-images">
          <img
            src={images[0].url}
            onClick={(event) => handleImageClick(images[0].zoomedUrl, event)}
          />
          <div className="image-container">
            {images.map((item, index) =>
              index !== 0 ? (
                <img
                  src={item.url}
                  key={index}
                  onClick={(event) => handleImageClick(item.zoomedUrl, event)}
                />
              ) : null
            )}
          </div>
        </div>

        <article className="articles-content">
          <div className="articles-content_description">
            <h2>{article.title}</h2>
            <p>{article.desc}</p>
          </div>
          <div className="articles-content_conclusion">
            <h3>{conclusion.title}</h3>
            <p>{conclusion.desc}</p>
          </div>
        </article>
      </div>

      {modalVisible && (
        <dialog className="modal" open onClick={handleModalClick}>
          <div className="modal-content fade">
            <button className="close-btn" onClick={handleModalClick}>
              &times;
            </button>
            {selectedImage && <img src={selectedImage} />}
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Articles;
