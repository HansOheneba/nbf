export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  creditHref?: string;
};

export const images = {
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of a woman in a purple patterned shirt against a red wall.",
    width: 1800,
    height: 2700,
    caption: "Photo via Unsplash",
    creditHref: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  horizon: {
    src: "/images/horizon.jpg",
    alt: "A flat-topped acacia tree in open grassland at sunset, with the sun shining through its branches.",
    width: 1024,
    height: 769,
    caption: "Savanna at sunset",
  },
  gathering: {
    src: "/images/ghana-desk.jpg",
    alt: "A woman at a desk in Ghana, looking at her phone beside an open laptop and a notebook.",
    width: 2000,
    height: 1335,
    caption: "Photo by Wundef Media on Pexels",
    creditHref: "https://www.pexels.com/photo/occupied-woman-using-phone-4212951/",
  },
  learning: {
    src: "/images/learning.jpg",
    alt: "Adults gathered around a table, reading a textbook together.",
    width: 2000,
    height: 1333,
    caption: "Photo by Monstera Production on Pexels",
    creditHref:
      "https://www.pexels.com/photo/black-students-reading-assignment-in-textbook-6238045/",
  },
  conversation: {
    src: "/images/friends.jpg",
    alt: "Two women smiling with their arms around each other in a sunlit park.",
    width: 2000,
    height: 3000,
    caption: "Photo by Iklima Babangida on Pexels",
    creditHref: "https://www.pexels.com/photo/two-friends-hugging-in-a-sunlit-park-29093766/",
  },
  library: {
    src: "/images/library.jpg",
    alt: "A woman in a yellow patterned dress choosing books from a library shelf in Ghana.",
    width: 2000,
    height: 1333,
    caption: "Photo by Zeal Creative Studios on Pexels",
    creditHref:
      "https://www.pexels.com/photo/african-woman-reading-books-in-ghana-library-31245745/",
  },
  profile: {
    src: "/images/profile.jpg",
    alt: "A woman standing in a park in Kumasi, reading papers she is holding.",
    width: 2000,
    height: 1333,
    caption: "Photo by A.K. Bissue on Pexels",
    creditHref:
      "https://www.pexels.com/photo/young-woman-studying-outdoors-in-kumasi-29558446/",
  },
  readers: {
    src: "/images/readers.jpg",
    alt: "Two women sitting together by a window, reading books.",
    width: 2000,
    height: 1333,
    caption: "Photo by Yaroslav Shuraev on Pexels",
    creditHref: "https://www.pexels.com/photo/women-reading-books-5085241/",
  },
  reading: {
    src: "/images/reading.jpg",
    alt: "A young woman sitting on a sofa at home, reading a book.",
    width: 2000,
    height: 2997,
    caption: "Photo by Alma Asinobi on Pexels",
    creditHref:
      "https://www.pexels.com/photo/a-woman-sitting-on-a-chair-while-reading-a-book-5363037/",
  },
  home: {
    src: "/images/home.jpg",
    alt: "A woman sitting on a rug at home, reading beside a notebook.",
    width: 2000,
    height: 3000,
    caption: "Photo by Monstera Production on Pexels",
    creditHref:
      "https://www.pexels.com/photo/focused-black-woman-reading-book-at-home-6281904/",
  },
} satisfies Record<string, GalleryImage>;
