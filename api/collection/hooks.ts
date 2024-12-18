import { useQuery } from "@tanstack/react-query";
import { dtoToArtObjects } from "./adapters";
import { API_KEY, BASE_URL } from "../constants";
import { ArtObject } from "@/domain/art-object";
import { RijksCollectionDto } from "./dtos";

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
