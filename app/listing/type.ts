export type DigimonDetails = {
  id: number;
  name: string;
  href: string;
  image: string;
};

export type DigimonPageable = {
  currentPage: number;
  elementsOnPage: number;
  totalElements: number;
  totalPages: number;
  previousPage: string;
  nextPage: string;
};
