import STRING_RESOURCES from "@/assets/strings";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertTriangle } from "lucide-react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { Keyboard } from "react-native";
import {
  searchQuerySchema,
  searchQuerySchemaType,
  useSearchForm,
} from "./useSearchForm";

type Props = {
  onSubmit: (data: searchQuerySchemaType) => void;
  defaultValue: string;
};

function SearchForm({ onSubmit, defaultValue }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useSearchForm();

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <FormControl isInvalid={!!errors?.search} className="w-full">
        <FormControlLabel>
          <FormControlLabelText>
            {STRING_RESOURCES.search_label}
          </FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue={defaultValue}
          name="search"
          control={control}
          rules={{
            validate: async (value) => {
              try {
                await searchQuerySchema.parseAsync({ search: value });
                return true;
              } catch (error: any) {
                return error.message;
              }
            },
          }}
          render={({ field: { onChange, onBlur } }) => (
            <Input>
              <InputField
                placeholder={STRING_RESOURCES.search_placeholder}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={handleKeyPress}
                returnKeyType="done"
                defaultValue={defaultValue}
              />
            </Input>
          )}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertTriangle} />
          <FormControlErrorText>{errors?.search?.message}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="w-full" onPress={handleKeyPress}>
        <ButtonText className="font-medium">
          {STRING_RESOURCES.search_button}
        </ButtonText>
      </Button>
    </>
  );
}

export default SearchForm;
