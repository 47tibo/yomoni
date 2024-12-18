import { ArtObject } from "@/domain/art-object";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useGetCollection } from "../hooks";

import { server } from "@/mocks/node";

const queryClient = new QueryClient();

beforeAll(() => server.listen());
afterEach(() => {
  queryClient.clear();
  server.resetHandlers();
});
afterAll(() => server.close());

describe("useGetArtObjects", () => {
  afterEach(() => {
    queryClient.clear();
  });

  it("fetches and returns art objects", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useGetCollection("MOCK"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const expected: ArtObject[] = [
      {
        title: "The Night Watch",
        subtitle: "The Night Watch by Rembrandt",
        objectNumber: "SK-C-5",
        imageUrl: "https://www.rijksmuseum.nl/nl/collectie/SK-C-5",
      },
    ];

    expect(result.current.data).toEqual(expected);
  });
});
