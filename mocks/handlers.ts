import { BASE_URL } from "@/api/constants";
import { http, HttpResponse } from "msw";
import { collection } from "./mocks";

export const handlers = [
  http.get(BASE_URL, ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("q");
    if (searchTerm === "MOCK") {
      return HttpResponse.json(collection);
    }
  }),
];
