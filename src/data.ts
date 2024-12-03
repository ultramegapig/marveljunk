// data.ts
export interface Character {
    id: number;
    name: string;
    description: string;
    imageUrl: string;  
    comics: number[]; 
  }
  
  export interface Comic {
    id: number;
    title: string;
    description: string;
    imageUrl: string;  
    characters: number[];  
  }
  
  export const characters: Character[] = [
    {
      id: 1,
      name: "Spider-Man",
      description: "A friendly neighborhood Spider-Man.",
      imageUrl: "https://via.placeholder.com/150", 
      comics: [1, 2],
    },
    {
      id: 2,
      name: "Iron Man",
      description: "A wealthy industrialist who became Iron Man.",
      imageUrl: "https://via.placeholder.com/150",  
      comics: [1],
    },
    {
      id: 3,
      name: "Thor",
      description: "The God of Thunder.",
      imageUrl: "https://via.placeholder.com/150", 
      comics: [2],
    },
  ];
  
  // Данные для комиксов
  export const comics: Comic[] = [
    {
      id: 1,
      title: "Spider-Man vs Iron Man",
      description: "A comic where Spider-Man fights Iron Man.",
      imageUrl: "https://via.placeholder.com/150", 
      characters: [1, 2],
    },
    {
      id: 2,
      title: "Thor: The Thunder God",
      description: "A comic featuring Thor in his latest adventure.",
      imageUrl: "https://via.placeholder.com/150",  
      characters: [3],
    },
  ];
  