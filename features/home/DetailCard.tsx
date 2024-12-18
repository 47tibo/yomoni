import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { LinearGradient } from "@/components/ui/linear-gradient";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import { Link } from "expo-router";

export type DetailCardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  objectNumber: string;
};

export default function DetailCard({
  imageUrl,
  title,
  subtitle,
  objectNumber,
}: DetailCardProps) {
  return (
    <Link href={`/art-object/${objectNumber}`} asChild>
      <Pressable>
        <LinearGradient
          className="rounded-md"
          {...fromCSS(`linear-gradient(135deg, #ffffff, #a8a8a8);`)}
        >
          <Box className="w-full h-64 items-center justify-center">
            <Image
              size="2xl"
              height={100}
              width={100}
              source={imageUrl}
              alt={title}
            />
          </Box>
          <Box className="h-4" />
          <VStack space="md" className="p-4">
            <Heading size="md">{title}</Heading>
            <Text className="text-sm">{subtitle}</Text>
          </VStack>
          <Box className="h-4" />
        </LinearGradient>
      </Pressable>
    </Link>
  );
}
