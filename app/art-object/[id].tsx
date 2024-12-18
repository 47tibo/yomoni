import { useGetArtObjectDetails } from "@/api/collection/hooks";
import { Image } from "@/components/ui/image";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import PLATFORM from "@/constants/platform";
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
        </ScrollView>
      </SafeAreaView>
    )
  );
}

export default ArtObject;
