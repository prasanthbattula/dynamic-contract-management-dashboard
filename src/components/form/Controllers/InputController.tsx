import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputFormField } from "../FormTypesAndConstants";

const InputController = (props: InputFormField) => {
  const { name, label, control } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputController;
