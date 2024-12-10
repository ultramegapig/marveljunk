import { makeAutoObservable } from "mobx";
import { getCharacters } from "../apiMethods";
import { Character } from "../types";
import { toast } from "react-toastify"; 

class CharactersStore {
  characters: Character[] = [];
  searchTerm: string = "";
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }

  setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchCharacters(limit: number = 5, nameStartsWith: string = "") {
    this.setLoading(true);
    this.setError(null);
    try {
      const characters = await getCharacters(limit, nameStartsWith);
      this.setCharacters(characters);
    } catch (error) {
      this.setError("Ошибка при загрузке данных");
      toast.error("Ошибка при загрузке данных"); 
    } finally {
      this.setLoading(false);
    }
  }

  get filteredCharacters() {
    return this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

const charactersStore = new CharactersStore();
export default charactersStore;
