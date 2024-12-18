import { useGetCollection } from "@/api/collection/hooks";
import STRING_RESOURCES from "@/assets/strings";
import { Grid, GridItem } from "@/components/ui/grid";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import DetailCard from "@/features/home/DetailCard";
import SearchHeader from "@/features/home/SearchHeader";
import { useStateOnLocalStorage } from "@/features/home/useStateOnLocalStorage";

export default function Home() {
  const [searchTerm, setSearchTerm] = useStateOnLocalStorage("searchTerm", "");
  const { data, isSuccess } = useGetCollection(searchTerm);

  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack className="w-full bg-background-0 flex-grow justify-center">
          <VStack className="md:items-center md:justify-center flex-1 w-full p-9 md:gap-10 gap-16 md:m-auto md:w-1/2 h-full">
            <SearchHeader onSearch={setSearchTerm} defaultValue={searchTerm} />
          </VStack>

          <VStack
            className="relative hidden md:flex h-full w-full flex-1 items-center justify-center"
            space="md"
          >
            <Image
              height={100}
              width={100}
              size="2xl"
              source={require("@/assets/images/logo.jpeg")}
              className="object-cover"
              alt="yomoni logo"
            />
          </VStack>
        </HStack>
        <VStack className="w-full bg-background-0 p-4">
          {isSuccess && !data.length && (
            <HStack className="pb-44 pl-10">
              <Heading size="2xl">{STRING_RESOURCES.search_no_results}</Heading>
            </HStack>
          )}
          {isSuccess && data.length > 0 && (
            <Grid
              className="gap-y-4 gap-x-4"
              _extra={{
                className: "grid-cols-12",
              }}
            >
              {data?.map((item) => (
                <GridItem
                  key={item.objectNumber}
                  _extra={{
                    className: "col-span-12 md:col-span-6 lg:col-span-3",
                  }}
                >
                  <DetailCard {...item} />
                </GridItem>
              ))}
            </Grid>
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
