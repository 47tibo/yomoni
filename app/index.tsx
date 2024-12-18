import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import SearchHeader from "@/features/home/SearchHeader";

export default function Home() {
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack className="w-full bg-background-0 flex-grow justify-center">
          <VStack className="md:items-center md:justify-center flex-1 w-full p-9 md:gap-10 gap-16 md:m-auto md:w-1/2 h-full">
            <SearchHeader
              onSearch={(value) => console.log("searching for", value)}
              defaultValue=""
            />
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
          <Heading size="2xl">résultats affichés ici</Heading>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
