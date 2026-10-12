export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  creditHref: string;
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
  gathering: {
    src: "/images/gathering.jpg",
    alt: "Four women in colourful West African dress sitting together on outdoor steps.",
    width: 2000,
    height: 3000,
    caption: "Photo by magapls on Pexels",
    creditHref:
      "https://www.pexels.com/photo/women-in-traditional-african-attire-sharing-moments-31602729/",
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
    src: "/images/conversation.jpg",
    alt: "Two women in Nigerian dress sitting outdoors and talking.",
    width: 2000,
    height: 2500,
    caption: "Photo by Jenum on Pexels",
    creditHref:
      "https://www.pexels.com/photo/women-conversing-outdoors-in-traditional-nigerian-setting-37677539/",
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
} satisfies Record<string, GalleryImage>;
