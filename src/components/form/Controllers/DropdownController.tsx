import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { DropdownField } from "../FormTypesAndConstants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dropdownItem } from "@/types/types";

const DropdownController = (props: DropdownField) => {
  const { name, label, control, options } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((item: dropdownItem) => (
                <SelectItem key={item?.value} value={item?.value}>
                  {item?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default DropdownController;
