import { Control } from "react-hook-form";

export type dropdownItem = {
  label: string;
  value: string;
};

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

type FormFieldConfig = InputFormField | DropdownField;

export type { FormFieldConfig, InputFormField, DropdownField };
