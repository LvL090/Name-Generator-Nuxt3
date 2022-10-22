interface Name {
  id: number;
  name: string;
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

export enum Gender {
  GIRL = "Chica",
  BOY = "Chico",
  UNISEX = "Unisex",
}

export enum Popularity {
  TRENDY = "Actual",
  UNIQUE = "Único",
}

export enum Length {
  SHORT = "Corto",
  LONG = "Largo",
  ALL = "Indiferente",
}
export const names: Name[] = [
  {
    id: 1,
    name: "Laith",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 2,
    name: "Adrián",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 3,
    name: "Lamelo",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 4,
    name: "Bruno",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 5,
    name: "Bartholomew",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 6,
    name: "Izan",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 7,
    name: "Marcos",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 8,
    name: "Thiago",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 9,
    name: "Leo",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 10,
    name: "Hugo",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 11,
    name: "Selma",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 12,
    name: "Asher",
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 13,
    name: "Max",
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },

  {
    id: 14,
    name: "Arya",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 15,
    name: "Olivia",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 16,
    name: "Fay",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 17,
    name: "Vega",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 18,
    name: "Genevieve",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 19,
    name: "Zoe",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 20,
    name: "Valentina",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 21,
    name: "Abril",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 22,
    name: "Maya",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 23,
    name: "Everleigh",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 24,
    name: "Poppy",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 25,
    name: "Maia",
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 26,
    name: "Gala",
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },

  {
    id: 27,
    name: "Jude",
    gender: Gender.UNISEX,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 28,
    name: "Adrian",
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 29,
    name: "Sunny",
    gender: Gender.UNISEX,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 30,
    name: "Channing",
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 31,
    name: "Ona",
    gender: Gender.UNISEX,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 32,
    name: "Dallas",
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },

  {
    id: 33,
    name: "Zephyr",
    gender: Gender.UNISEX,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },

  {
    id: 34,
    name: "Teri",
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
];
