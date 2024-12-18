export interface ArtObject {
  imageUrl: string;
  title: string;
  subtitle: string;
  objectNumber: string;
}

export interface ArtObjectDetails {
  title: string;
  subtitle: string;
  longTitle: string;
  objectNumber: string;
  imageUrl: string;
  longDescription: string;
  shortDescription: string;
  objectTypes: string[];
  physicalMedium: string;
}