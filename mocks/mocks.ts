import {
  RijksCollectionDetailsDto,
  RijksCollectionDto,
} from "@/api/collection/dtos";

export const collection: RijksCollectionDto = {
  artObjects: [
    {
      title: "The Night Watch",
      longTitle: "The Night Watch by Rembrandt",
      objectNumber: "SK-C-5",
      webImage: {
        url: "https://www.rijksmuseum.nl/nl/collectie/SK-C-5",
      },
    },
  ],
};

export const artObjectDetails: RijksCollectionDetailsDto = {
  artObject: {
    objectNumber: "SK-C-5",
    title: "The Night Watch",
    longTitle: "The Night Watch by Rembrandt",
    physicalMedium: "oil on canvas",
    subTitle: "Great painting from 19th century",
    webImage: {
      url: "https://www.rijksmuseum.nl/nl/collectie/SK-C-5",
    },
    label: {
      description: "The Night Watch",
    },
    objectTypes: ["painting"],
    description: "This painting was Rembrandt's most famous painting",
  },
};
