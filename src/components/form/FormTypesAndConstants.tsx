import { dropdownItem } from "@/types/types";
import { Control } from "react-hook-form";

type InputFormField = {
  name: string;
  label: string;
  controlType: string;
  control: Control;
};

type DropdownField = {
  name: string;
  label: string;
  controlType: string;
  control: Control;
  options: Array<dropdownItem>;
};

type DatePickerField = {
  name: string;
  label: string;
  controlType: string;
  control: Control;
};

type CheckboxField = {
  name: string;
  label: string;
  controlType: string;
  control: Control;
};

type FormFieldConfig =
  | InputFormField
  | DropdownField
  | DatePickerField
  | CheckboxField;

export type {
  FormFieldConfig,
  InputFormField,
  DropdownField,
  DatePickerField,
  CheckboxField,
};
