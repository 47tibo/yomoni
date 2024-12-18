import STRING_RESOURCES from "@/assets/strings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MIN_SEARCH_LENGTH = 3;

export const searchQuerySchema = z.object({
  search: z
    .string()
    .min(
      MIN_SEARCH_LENGTH,
      STRING_RESOURCES.search_error.replace(
        "[[X]]",
        MIN_SEARCH_LENGTH.toString()
      )
    ),
});

export type searchQuerySchemaType = z.infer<typeof searchQuerySchema>;

export function useSearchForm() {
  return useForm<searchQuerySchemaType>({
    resolver: zodResolver(searchQuerySchema),
  });
}
