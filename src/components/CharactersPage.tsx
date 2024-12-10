import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "../styles/ContentPage.module.scss";
import { textVariables } from "../textVariables";
import charactersStore from "../stores/charactersStore"; 
import { observer } from "mobx-react-lite";
import debounce from 'lodash.debounce'; 

const CharactersPage: React.FC = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    charactersStore.fetchCharacters();
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/characters/${id}`); 
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    charactersStore.setSearchTerm(e.target.value);
    debouncedFetchCharacters(e.target.value); 
  };

  const debouncedFetchCharacters = debounce((searchTerm: string) => {
    charactersStore.fetchCharacters(5, searchTerm); 
  }, 3000);

  const handleSearchButtonClick = () => {
    console.log("Search button clicked");
  };

  if (charactersStore.loading) {
    return <div>Загрузка...</div>;
  }

  if (charactersStore.error) {
    return <div>{charactersStore.error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{textVariables.charactersPageTitle}</h1>
        <h3 className={styles.cardCount}>({charactersStore.filteredCharacters.length})</h3>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={textVariables.characterPlaceholder}
          value={charactersStore.searchTerm}
          onChange={handleSearchChange}
          className={styles.input}
        />
        <button onClick={handleSearchButtonClick} className={styles.button}>
          {textVariables.searchButton}
        </button>
      </div>

      <hr className={styles.divider} />

      <div className={styles.cardList}>
        {charactersStore.filteredCharacters.map((character) => (
          <Card
            key={character.id}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            title={character.name}
            description={character.description}
            onClick={() => handleCardClick(character.id)}
          />
        ))}
      </div>
    </div>
  );
});

export default CharactersPage;
