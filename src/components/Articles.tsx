import { useState } from "react";
import data from "../data/data";

interface ArticleDetails {
  title: string;
  desc: string;
}

const Articles = ({ details }: { details?: ArticleDetails }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { images, article, conclusion } = data;

  const handleImageClick = (
    image: string,
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    setSelectedImage(image);
    setModalVisible(true);

    // Clicked element
    console.log("Image url: ", image);
    console.log("Element: ", event.currentTarget);
  };

  const handleModalClick = () => {
    closeModal();
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="articles animate__fadeIn">
      <div className="articles-container">
        <div className="article-images">
          <img
            src={images.image1}
            onClick={(event) => handleImageClick(images.image1, event)}
          />
          <div className="image-container">
            <img
              src={images.image2}
              onClick={(event) => handleImageClick(images.image2, event)}
            />
            <img
              src={images.image3}
              onClick={(event) => handleImageClick(images.image3, event)}
            />
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
            <button className="close-btn" onClick={closeModal}>
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
