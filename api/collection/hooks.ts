import { ArtObject, ArtObjectDetails } from "@/domain/art-object";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "../constants";
import { dtoToArtObjectDetails, dtoToArtObjects } from "./adapters";
import { RijksCollectionDetailsDto, RijksCollectionDto } from "./dtos";

export function useGetCollection(searchTerm: string) {
  return useQuery<ArtObject[]>({
    queryKey: ["collection", searchTerm],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&imgonly=True&ps=100&q=${searchTerm}`
      );
      const dto: RijksCollectionDto = await response.json();
      return dtoToArtObjects(dto);
    },
  });
}

export function useGetArtObjectDetails(objectId: string) {
  return useQuery<ArtObjectDetails>({
    queryKey: ["art-object", objectId],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/${objectId}?key=${API_KEY}`);
      const dto: RijksCollectionDetailsDto = await response.json();
      return dtoToArtObjectDetails(dto);
    },
  });
}
