import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "../styles/ContentPage.module.scss";
import { textVariables } from "../textVariables";
import { comics } from "../data"; // Импортируем данные из data.ts

const ComicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Используем для перенаправления

  const handleCardClick = (id: number) => {
    navigate(`/comics/${id}`); // Перенаправление на страницу комикса
  };

  const handleSearchButtonClick = () => {
    console.log("Search button clicked");
  };

  // Фильтрация комиксов по названию, если введен поисковый запрос
  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{textVariables.comicsPageTitle}</h1>
        <h3 className={styles.cardCount}>({filteredComics.length})</h3>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={textVariables.comicsPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSearchButtonClick} className={styles.button}>
          {textVariables.searchButton}
        </button>
      </div>

      <hr className={styles.divider} />

      <div className={styles.cardList}>
        {filteredComics.map((comic) => (
          <Card
            key={comic.id}
            imageUrl={comic.imageUrl}
            title={comic.title}
            description={comic.description}
            onClick={() => handleCardClick(comic.id)} // Обработчик клика
          />
        ))}
      </div>
    </div>
  );
};

export default ComicsPage;
