import { useGetArtObjectDetails } from "@/api/collection/hooks";
import { Box } from "@/components/ui/box";
import { Grid, GridItem } from "@/components/ui/grid";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import PLATFORM from "@/constants/platform";
import ArtObjectSection from "@/features/art-object/ArtObjectSection";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useLayoutEffect } from "react";

function ArtObject() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isSuccess } = useGetArtObjectDetails(id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data?.title,
    });
  }, [navigation, data]);

  return (
    isSuccess && (
      <SafeAreaView className="w-full h-full">
        <ScrollView
          className="w-full h-full"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Image
            height={100}
            width={100}
            size={PLATFORM.IS_WEB ? "full" : "none"}
            className={
              PLATFORM.IS_WEB ? "aspect-[16/9] w-full " : "w-full h-96"
            }
            source={data.imageUrl}
            alt={data.title}
          />
          <VStack className="px-4 pt-2">
            <Grid
              className="gap-y-6 gap-x-10 pb-4"
              _extra={{
                className: "grid-cols-12",
              }}
            >
              <GridItem
                _extra={{
                  className: "col-span-12 md:col-span-8 lg:col-span-8",
                }}
              >
                <Box className="bg-background-1 p-4 pb-0">
                  <Heading className="pb-2" size="2xl">
                    {data.title}
                  </Heading>
                  <Heading className="pb-2" size="md">
                    {data.subtitle}
                  </Heading>
                  <Text size="lg" className="max-w-prose">
                    {data.shortDescription}
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                _extra={{
                  className: "col-span-12 md:col-span-4 lg:col-span-4",
                }}
              >
                <VStack className="bg-background-1 p-4 pb-0" space="xl">
                  <ArtObjectSection label="Medium" text={data.physicalMedium} />
                  <ArtObjectSection
                    label="Object Number"
                    text={data.objectNumber}
                  />
                  <ArtObjectSection
                    label="Object types"
                    text={data.objectTypes.join(", ")}
                  />
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    )
  );
}

export default ArtObject;
