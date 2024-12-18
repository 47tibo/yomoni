import STRING_RESOURCES from "@/assets/strings";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import SearchForm from "@/features/home/SearchForm";
import {
  searchQuerySchemaType,
  useSearchForm,
} from "@/features/home/useSearchForm";

type SearchHeaderProps = {
  onSearch: (value: string) => void;
  defaultValue: string;
};

export default function SearchHeader({
  onSearch,
  defaultValue,
}: SearchHeaderProps) {
  const { reset } = useSearchForm();

  const onSubmit = (_data: searchQuerySchemaType) => {
    onSearch(_data.search);
    reset();
  };

  return (
    <VStack className="max-w-[440px] w-full" space="md">
      <VStack className="md:items-center" space="md">
        <VStack>
          <Heading className="md:text-center" size="3xl">
            {STRING_RESOURCES.search_header}
          </Heading>
          <Text className="text-sm">{STRING_RESOURCES.search_subheader}</Text>
        </VStack>
      </VStack>
      <VStack space="xl" className="w-full ">
        <SearchForm onSubmit={onSubmit} defaultValue={defaultValue} />
      </VStack>
    </VStack>
  );
}
