import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "../styles/ContentPage.module.scss";
import { characters } from "../data"; // Импортируем данные из data.ts
import { textVariables } from "../textVariables";

const CharactersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleCardClick = (id: number) => {
    navigate(`/characters/${id}`); // Перенаправление на страницу персонажа
  };

  const handleSearchButtonClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{textVariables.charactersPageTitle}</h1>
        <h3 className={styles.cardCount}>({characters.length})</h3>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={textVariables.characterPlaceholder}
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
        {characters
          .filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((character) => (
            <Card
              key={character.id}
              imageUrl={character.imageUrl}
              title={character.name} // Используем name из данных
              description={character.description}
              onClick={() => handleCardClick(character.id)} // Обработчик клика
            />
          ))}
      </div>
    </div>
  );
};

export default CharactersPage;
