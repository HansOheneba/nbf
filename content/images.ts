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
    src: "/images/businesswomen.jpg",
    alt: "Three women meeting around a conference table with laptops in a bright office.",
    width: 6016,
    height: 4016,
    caption: "Women in a meeting",
  },
  campaign: {
    src: "/images/black-no-smile.jpg",
    alt: "A young person resting their cheek on one hand, with another person seated behind them.",
    width: 500,
    height: 667,
    caption: "A quiet portrait",
  },
  hero: {
    src: "/images/gg.jpg",
    alt: "A crowd of children smiling and waving, gathered closely together.",
    width: 6000,
    height: 4000,
    caption: "Children waving",
  },
  opp: {
    src: "/images/opp.jpg",
    alt: "An adult and a child holding hands, the child's hand wrapped around the adult's finger.",
    width: 6000,
    height: 4000,
    caption: "Holding hands",
  },
  gathering: {
    src: "/images/emp.jpg",
    alt: "A group of people standing in a circle, stacking their hands together in the centre.",
    width: 5760,
    height: 3840,
    caption: "Hands together",
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
    alt: "A person lying on cardboard on a sidewalk beside a brick wall.",
    width: 3024,
    height: 4032,
    caption: "A person resting on a sidewalk",
  },
} satisfies Record<string, GalleryImage>;
