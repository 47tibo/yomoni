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
