import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

type Props = {
  label: string;
  text: string;
};

function ArtObjectSection({ label, text }: Props) {
  return (
    <Box>
      <Heading size="lg">{label}</Heading>
      <Text size="lg">{text}</Text>
    </Box>
  );
}

export default ArtObjectSection;
