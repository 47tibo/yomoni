import { ArtObject } from "@/domain/art-object";
import { RijksCollectionDto } from "./dtos";

export function dtoToArtObjects(dto: RijksCollectionDto): ArtObject[] {
  return dto.artObjects.map((artObject) => ({
    imageUrl: artObject.webImage.url,
    title: artObject.title,
    subtitle: artObject.longTitle,
    objectNumber: artObject.objectNumber,
  }));
}
