export interface RijksArtObjectDto {
  title: string;
  longTitle: string;
  objectNumber: string;
  webImage: RijksWebImageDto;
}

export interface RijksWebImageDto {
  url: string;
}

export interface RijksCollectionDto {
  artObjects: RijksArtObjectDto[];
}

export interface RijksCollectionDetailsDto {
  artObject: RijksArtObjectDetailsDto;
}

export interface RijksArtObjectDetailsDto {
  objectNumber: string;
  title: string;
  longTitle: string;
  physicalMedium: string;
  subTitle: string;
  webImage: RijksWebImageDto;
  label: RijksLabelDto;
  objectTypes: string[];
  description: string;
}

export interface RijksLabelDto {
  description: string;
}