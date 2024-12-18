import { ArtObject, ArtObjectDetails } from "@/domain/art-object";
import { RijksCollectionDetailsDto, RijksCollectionDto } from "./dtos";

export function dtoToArtObjects(dto: RijksCollectionDto): ArtObject[] {
  return dto.artObjects.map((artObject) => ({
    imageUrl: artObject.webImage.url,
    title: artObject.title,
    subtitle: artObject.longTitle,
    objectNumber: artObject.objectNumber,
  }));
}

export function dtoToArtObjectDetails(
  dto: RijksCollectionDetailsDto
): ArtObjectDetails {
  return {
    imageUrl: dto.artObject.webImage.url,
    title: dto.artObject.title,
    longTitle: dto.artObject.longTitle,
    subtitle: dto.artObject.subTitle,
    objectNumber: dto.artObject.objectNumber,
    longDescription: dto.artObject.description,
    shortDescription: dto.artObject.label.description,
    physicalMedium: dto.artObject.physicalMedium,
    objectTypes: dto.artObject.objectTypes,
  };
}
