import { ArtObject, ArtObjectDetails } from "@/domain/art-object";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useGetArtObjectDetails, useGetCollection } from "../hooks";

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

describe("useGetArtObjectDetails", () => {
  it("fetches and returns art object details", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(
      () => useGetArtObjectDetails("MOCKID"),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const expected: ArtObjectDetails = {
      objectNumber: "SK-C-5",
      title: "The Night Watch",
      longTitle: "The Night Watch by Rembrandt",
      physicalMedium: "oil on canvas",
      subtitle: "Great painting from 19th century",
      objectTypes: ["painting"],
      shortDescription: "The Night Watch",
      longDescription: "This painting was Rembrandt's most famous painting",
      imageUrl: "https://www.rijksmuseum.nl/nl/collectie/SK-C-5",
    };

    expect(result.current.data).toEqual(expected);
  });
});
